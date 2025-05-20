import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'
import { motion, AnimatePresence } from 'framer-motion'
import Fade from 'react-reveal/Fade'
import { useState, useEffect } from 'react'
import InfoIcon from '@material-ui/icons/Info'
import CodeIcon from '@material-ui/icons/Code'
import StorageIcon from '@material-ui/icons/Storage'
import BarChartIcon from '@material-ui/icons/BarChart'
import BubbleChartIcon from '@material-ui/icons/BubbleChart'
import MemoryIcon from '@material-ui/icons/Memory'
import LanguageIcon from '@material-ui/icons/Language'
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode'

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isRotating, setIsRotating] = useState(false)
  
  // Track mouse position for 3D effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  
  // Start rotation animation
  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setIsRotating(prev => !prev)
    }, 5000)
    
    return () => clearInterval(rotationInterval)
  }, [])
  
  if (!skills.length) return null

  // Get icon based on skill name
  const getSkillIcon = (skillName) => {
    const name = skillName.toLowerCase()
    if (name.includes('python')) return <CodeIcon className="skill-icon" />
    if (name.includes('data science')) return <BubbleChartIcon className="skill-icon" />
    if (name.includes('machine learning')) return <MemoryIcon className="skill-icon" />
    if (name.includes('sql')) return <StorageIcon className="skill-icon" />
    if (name.includes('c++')) return <CodeIcon className="skill-icon" />
    if (name.includes('html')) return <LanguageIcon className="skill-icon" />
    if (name.includes('javascript')) return <DeveloperModeIcon className="skill-icon" />
    if (name.includes('visualization')) return <BarChartIcon className="skill-icon" />
    return <CodeIcon className="skill-icon" />
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const skillVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }
  
  // 3D rotation animation
  const rotateVariants = {
    rotate: {
      rotateY: [0, 360],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      }
    },
    stop: {
      rotateY: 0,
      transition: {
        duration: 0.5,
      }
    }
  }

  return (
    <section className='section skills' id='skills'>
      <motion.h2 
        className='section__title'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="skills__title-3d">Skills</span>
      </motion.h2>
      
      <motion.div 
        className="skills__floating-shapes"
        animate={{ 
          rotateZ: [0, 360],
          y: [0, -10, 0]
        }}
        transition={{ 
          rotateZ: { duration: 20, repeat: Infinity, ease: "linear" },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }
        }}
      >
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </motion.div>
      
      <Fade bottom duration={1000}>
        <motion.div 
          className='skills__grid'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, index) => {
            // Calculate 3D tilt effect based on mouse position
            const calculateTilt = (element) => {
              if (!element) return { rotateX: 0, rotateY: 0 }
              
              const rect = element.getBoundingClientRect()
              const centerX = rect.left + rect.width / 2
              const centerY = rect.top + rect.height / 2
              
              // Calculate rotation based on mouse distance from center
              const rotateY = ((mousePosition.x - centerX) / (rect.width / 2)) * 10
              const rotateX = ((centerY - mousePosition.y) / (rect.height / 2)) * 10
              
              return { rotateX, rotateY }
            }
            
            return (
              <motion.div
                key={uniqid()}
                className='skills__card skills__card-3d'
                variants={skillVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.2)',
                  backgroundColor: 'var(--clr-primary-light)'
                }}
                animate={isRotating && hoveredSkill === null ? "rotate" : "stop"}
                variants={rotateVariants}
                transition={{ duration: 0.3 }}
                onHoverStart={() => setHoveredSkill(index)}
                onHoverEnd={() => setHoveredSkill(null)}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                <motion.div 
                  className='skills__card-content'
                  style={{
                    transformStyle: "preserve-3d"
                  }}
                  animate={hoveredSkill === index ? calculateTilt : { rotateX: 0, rotateY: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="skills__icon-container">
                    <motion.div
                      className="skills__icon-wrapper"
                      animate={{ 
                        rotateY: hoveredSkill === index ? [0, 360] : 0,
                        scale: hoveredSkill === index ? [1, 1.2, 1] : 1
                      }}
                      transition={{ 
                        rotateY: { duration: 1.5, ease: "easeInOut" },
                        scale: { duration: 1, repeat: Infinity, repeatType: "reverse" }
                      }}
                    >
                      {getSkillIcon(skill.name)}
                    </motion.div>
                  </div>
                  
                  <h3 className='skills__name'>{skill.name}</h3>
                  
                  <div className='skills__level-container'>
                    <motion.div 
                      className='skills__level-bar' 
                      initial={{ width: 0 }}
                      animate={{ 
                        width: `${skill.level}%`,
                        backgroundColor: hoveredSkill === index ? 'var(--clr-primary)' : 'var(--clr-primary-light)'
                      }}
                      transition={{ 
                        duration: 1.5, 
                        ease: "easeOut",
                        delay: 0.2
                      }}
                    >
                      <motion.div 
                        className="skills__level-glow"
                        animate={{
                          opacity: [0.3, 0.8, 0.3],
                          x: ['-100%', '100%']
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </motion.div>
                  </div>
                  
                  <motion.span 
                    className='skills__level-text'
                    animate={{
                      scale: hoveredSkill === index ? 1.1 : 1,
                      color: hoveredSkill === index ? 'var(--clr-primary)' : 'var(--clr-fg)',
                      textShadow: hoveredSkill === index ? '0 0 8px rgba(var(--rgb-primary), 0.5)' : 'none'
                    }}
                  >
                    {skill.level}%
                  </motion.span>
                  
                  <div className="skills__info-icon-container">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      whileTap={{ scale: 0.9 }}
                      className="skills__info-icon"
                    >
                      <InfoIcon />
                    </motion.div>
                  </div>
                  
                  <AnimatePresence>
                    {skill.description && hoveredSkill === index && (
                      <motion.div 
                        className="skills__description"
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                      >
                        {skill.description}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </Fade>
    </section>
  )
}

export default Skills
