import React, { useState } from 'react'
import './Contact.css'
import { contact } from '../../portfolio'
import { motion, AnimatePresence } from 'framer-motion'
import Fade from 'react-reveal/Fade'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import SendIcon from '@material-ui/icons/Send'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [focusedField, setFocusedField] = useState(null)
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }
  
  const handleFocus = (field) => {
    setFocusedField(field)
  }
  
  const handleBlur = () => {
    setFocusedField(null)
    validateForm()
  }
  
  const validateForm = () => {
    const errors = {
      name: '',
      email: '',
      message: ''
    }
    
    // Name validation
    if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters'
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address'
    }
    
    // Message validation
    if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters'
    }
    
    setFormErrors(errors)
    return !errors.name && !errors.email && !errors.message
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate form before submission
    const isValid = validateForm()
    
    if (isValid) {
      setIsSubmitting(true)
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false)
        setSubmitMessage('Thank you for your message! I will get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitMessage('')
        }, 5000)
      }, 1500)
    } else {
      // Shake the form if validation fails
      const form = document.querySelector('.contact__form')
      form.classList.add('shake')
      setTimeout(() => {
        form.classList.remove('shake')
      }, 500)
    }
  }

  if (!contact.email) return null

  return (
    <section className='section contact' id='contact'>
      <h2 className='section__title'>Contact Me</h2>
      
      <div className='contact__container'>
        <Fade left duration={1000}>
          <div className='contact__info'>
            <h3>Get In Touch</h3>
            <p className='contact__text'>
              Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className='contact__details'>
              {contact.email && (
                <div className='contact__detail'>
                  <EmailIcon className='contact__icon' />
                  <a href={`mailto:${contact.email}`} className='contact__detail-text'>
                    {contact.email}
                  </a>
                </div>
              )}
              
              {contact.phone && (
                <div className='contact__detail'>
                  <PhoneIcon className='contact__icon' />
                  <a href={`tel:${contact.phone}`} className='contact__detail-text'>
                    {contact.phone}
                  </a>
                </div>
              )}
              
              {contact.location && (
                <div className='contact__detail'>
                  <LocationOnIcon className='contact__icon' />
                  <span className='contact__detail-text'>{contact.location}</span>
                </div>
              )}
            </div>
            
            <div className='contact__social'>
              {contact.social && contact.social.map((item, index) => (
                <motion.a 
                  key={index}
                  href={item.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='contact__social-link'
                  whileHover={{ y: -5, scale: 1.1 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </Fade>
        
        <Fade right duration={1000}>
          <div className='contact__form-container'>
            <form className='contact__form' onSubmit={handleSubmit}>
              <motion.div 
                className='contact__form-group'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <label htmlFor='name' className='contact__label'>Name</label>
                <motion.input
                  type='text'
                  id='name'
                  name='name'
                  className={`contact__input ${formErrors.name ? 'error' : ''}`}
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  required
                  whileFocus={{ 
                    boxShadow: '0 0 0 2px rgba(41, 120, 181, 0.3)',
                    borderColor: 'var(--clr-primary)'
                  }}
                />
                {formErrors.name && (
                  <motion.span 
                    className="contact__error"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {formErrors.name}
                  </motion.span>
                )}
              </motion.div>
              
              <motion.div 
                className='contact__form-group'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label htmlFor='email' className='contact__label'>Email</label>
                <motion.input
                  type='email'
                  id='email'
                  name='email'
                  className={`contact__input ${formErrors.email ? 'error' : ''}`}
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  required
                  whileFocus={{ 
                    boxShadow: '0 0 0 2px rgba(41, 120, 181, 0.3)',
                    borderColor: 'var(--clr-primary)'
                  }}
                />
                {formErrors.email && (
                  <motion.span 
                    className="contact__error"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {formErrors.email}
                  </motion.span>
                )}
              </motion.div>
              
              <motion.div 
                className='contact__form-group'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label htmlFor='message' className='contact__label'>Message</label>
                <motion.textarea
                  id='message'
                  name='message'
                  className={`contact__textarea ${formErrors.message ? 'error' : ''}`}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  rows='5'
                  required
                  whileFocus={{ 
                    boxShadow: '0 0 0 2px rgba(41, 120, 181, 0.3)',
                    borderColor: 'var(--clr-primary)'
                  }}
                ></motion.textarea>
                {formErrors.message && (
                  <motion.span 
                    className="contact__error"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {formErrors.message}
                  </motion.span>
                )}
              </motion.div>
              
              <motion.button
                type='submit'
                className='contact__button'
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {isSubmitting ? (
                  <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    Sending...
                  </motion.span>
                ) : (
                  <motion.span className="contact__button-content">
                    Send Message
                    <SendIcon className="contact__send-icon" />
                  </motion.span>
                )}
              </motion.button>
              
              <AnimatePresence>
                {submitMessage && (
                  <motion.div 
                    className='contact__success-message'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {submitMessage}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default Contact
