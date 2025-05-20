import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import DataUsageIcon from '@material-ui/icons/DataUsage'
import CodeIcon from '@material-ui/icons/Code'
import StorageIcon from '@material-ui/icons/Storage'
import { about } from '../../portfolio'
import './About.css'
import { motion } from 'framer-motion'
import Fade from 'react-reveal/Fade'
import Typewriter from 'typewriter-effect'

const About = () => {
  const { name, role, description, social, skills } = about
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };
  
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
                    strings: [
                      role, 
                      'Data Science Enthusiast', 
                      'Machine Learning Engineer', 
                      'Data Analyst',
                      'AI Researcher'
                    ],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: 'about__typed',
                    cursorClassName: 'about__cursor'
                  }}
                />
              </h2>
            )}
            
            <p className='about__desc'>{description && description}</p>

            <motion.div 
              className='about__data-icons'
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="data-icon-container">
                <DataUsageIcon className="data-icon" />
                <span>Data Analysis</span>
              </motion.div>
              <motion.div variants={itemVariants} className="data-icon-container">
                <CodeIcon className="data-icon" />
                <span>ML Algorithms</span>
              </motion.div>
              <motion.div variants={itemVariants} className="data-icon-container">
                <StorageIcon className="data-icon" />
                <span>Big Data</span>
              </motion.div>
            </motion.div>

            <div className='about__contact'>
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
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: 'var(--clr-primary)', 
                    color: 'var(--clr-bg)',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
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
