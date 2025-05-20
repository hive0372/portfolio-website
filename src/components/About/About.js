import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GetAppIcon from '@material-ui/icons/GetApp'
import { about } from '../../portfolio'
import './About.css'
import { motion } from 'framer-motion'
import Fade from 'react-reveal/Fade'
import Typewriter from 'typewriter-effect'
import { useState } from 'react'

const About = () => {
  const { name, role, description, resume, social, skills } = about
  const [isResumeHovered, setIsResumeHovered] = useState(false)
  
  return (
    <div className='about'>
      <div className='about__content'>
        <div className='about__text'>
          <Fade left duration={1000}>
            {name && (
              <h1>
                Hi, I am <span className='about__name'>{name}</span>
              </h1>
            )}

            {role && (
              <h2 className='about__role'>
                A{' '}
                <Typewriter
                  options={{
                    strings: [role, 'Data Science Enthusiast', 'Problem Solver'],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: 'about__typed',
                    cursorClassName: 'about__cursor'
                  }}
                />
              </h2>
            )}
            
            <p className='about__desc'>{description && description}</p>

            <div className='about__contact'>
              {resume && (
                <motion.a 
                  href={resume}
                  className="about__resume-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setIsResumeHovered(true)}
                  onMouseLeave={() => setIsResumeHovered(false)}
                >
                  <motion.span 
                    type='button' 
                    className='btn btn--outline about__resume-btn'
                    animate={{ 
                      backgroundColor: isResumeHovered ? 'var(--clr-primary)' : 'transparent',
                      color: isResumeHovered ? 'var(--clr-bg)' : 'var(--clr-primary)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <GetAppIcon className={`about__resume-icon ${isResumeHovered ? 'active' : ''}`} />
                    Download Resume
                  </motion.span>
                </motion.a>
              )}

              {social && (
                <div className='about__social'>
                  {social.github && (
                    <motion.a
                      href={social.github}
                      aria-label='github'
                      className='link link--icon'
                      whileHover={{ y: -5, color: 'var(--clr-primary)' }}
                    >
                      <GitHubIcon />
                    </motion.a>
                  )}

                  {social.linkedin && (
                    <motion.a
                      href={social.linkedin}
                      aria-label='linkedin'
                      className='link link--icon'
                      whileHover={{ y: -5, color: 'var(--clr-primary)' }}
                    >
                      <LinkedInIcon />
                    </motion.a>
                  )}
                </div>
              )}
            </div>
          </Fade>
        </div>


      </div>

      {skills && skills.length > 0 && (
        <Fade bottom duration={1000}>
          <div className='about__highlights'>
            <h3>Key Skills</h3>
            <div className='about__highlights-list'>
              {skills.map((skill, index) => (
                <motion.span 
                  key={index} 
                  className='about__highlight-item'
                  whileHover={{ scale: 1.1, backgroundColor: 'var(--clr-primary)', color: 'var(--clr-bg)' }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </Fade>
      )}
    </div>
  )
}

export default About
