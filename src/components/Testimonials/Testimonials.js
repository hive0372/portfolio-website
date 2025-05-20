import React, { useState, useEffect } from 'react'
import { testimonials } from '../../portfolio'
import './Testimonials.css'
import { motion, AnimatePresence } from 'framer-motion'
import Fade from 'react-reveal/Fade'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(null)
  const [isPaused, setIsPaused] = useState(false)
  const [progressWidth, setProgressWidth] = useState(0)
  
  // Auto-rotate testimonials with progress bar
  useEffect(() => {
    if (!testimonials || testimonials.length <= 1 || isPaused) return
    
    const duration = 8000 // 8 seconds
    const interval = 50 // Update progress every 50ms
    let progress = 0
    
    const timer = setInterval(() => {
      progress += (interval / duration) * 100
      setProgressWidth(progress)
      
      if (progress >= 100) {
        progress = 0
        setProgressWidth(0)
        setDirection('next')
        setCurrentIndex(prevIndex => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        )
      }
    }, interval)
    
    return () => clearInterval(timer)
  }, [currentIndex, isPaused])
  
  // Handle mouse interactions
  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)
  
  if (!testimonials || !testimonials.length) return null
  
  const handlePrev = () => {
    setProgressWidth(0)
    setDirection('prev')
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }
  
  const handleNext = () => {
    setProgressWidth(0)
    setDirection('next')
    setCurrentIndex(prevIndex => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }
  
  // Handle swipe gestures
  const handleDragEnd = (e, info) => {
    if (info.offset.x > 100) {
      handlePrev()
    } else if (info.offset.x < -100) {
      handleNext()
    }
  }
  
  const variants = {
    enter: (direction) => ({
      x: direction === 'next' ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction === 'next' ? -300 : 300,
      opacity: 0
    })
  }
  
  return (
    <section className='section testimonials' id='testimonials'>
      <Fade top>
        <h2 className='section__title'>Testimonials</h2>
      </Fade>
      
      <div 
        className='testimonials__slider-container'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="testimonial__progress-container">
          <motion.div 
            className="testimonial__progress-bar"
            animate={{ width: `${progressWidth}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        
        <AnimatePresence initial={false} custom={direction} mode='wait'>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className='testimonial'
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
          >
            <div className='testimonial__content'>
              <div className='testimonial__quote'>
                <FormatQuoteIcon className='testimonial__quote-icon' />
                <p className='testimonial__text'>{testimonials[currentIndex].text}</p>
              </div>
              
              <div className='testimonial__author'>
                {testimonials[currentIndex].image && (
                  <motion.img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className='testimonial__author-image'
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  />
                )}
                <motion.div 
                  className='testimonial__author-info'
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h4 className='testimonial__author-name'>{testimonials[currentIndex].name}</h4>
                  <p className='testimonial__author-role'>{testimonials[currentIndex].role}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {testimonials.length > 1 && (
          <div className='testimonial__controls'>
            <motion.button 
              className='testimonial__control-btn'
              onClick={handlePrev}
              whileHover={{ scale: 1.1, backgroundColor: 'var(--clr-primary)' }}
              whileTap={{ scale: 0.9 }}
            >
              <NavigateBeforeIcon />
            </motion.button>
            
            <div className='testimonial__dots'>
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  className={`testimonial__dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => {
                    setDirection(index > currentIndex ? 'next' : 'prev')
                    setCurrentIndex(index)
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
            
            <motion.button 
              className='testimonial__control-btn'
              onClick={handleNext}
              whileHover={{ scale: 1.1, backgroundColor: 'var(--clr-primary)' }}
              whileTap={{ scale: 0.9 }}
            >
              <NavigateNextIcon />
            </motion.button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Testimonials