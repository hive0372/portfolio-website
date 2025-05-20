import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'
import { motion, AnimatePresence } from 'framer-motion'
import Fade from 'react-reveal/Fade'
import { useState } from 'react'
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

  return (
    <section className='section skills' id='skills'>
      <motion.h2
        className='section__title'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.span
          animate={{
            rotateY: [0, 360]
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 5
          }}
          style={{ display: 'inline-block' }}
        >
          <CodeIcon style={{ fontSize: '2rem', marginRight: '0.5rem' }} />
        </motion.span>
        Skills
      </motion.h2>

      <Fade bottom duration={1000}>
        <motion.div
          className='skills__grid'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={uniqid()}
              className='skills__card'
              variants={skillVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.2)',
                backgroundColor: 'var(--clr-primary-light)'
              }}
              transition={{ duration: 0.3 }}
              onHoverStart={() => setHoveredSkill(index)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              <div className='skills__card-content'>
                <div className="skills__icon-container">
                  <motion.div
                    className="skills__icon-wrapper"
                    animate={{
                      rotateY: hoveredSkill === index ? [0, 360] : 0
                    }}
                    transition={{
                      rotateY: { duration: 1.5, ease: "easeInOut" }
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
                    color: hoveredSkill === index ? 'var(--clr-primary)' : 'var(--clr-fg)'
                  }}
                >
                  {skill.level}%
                </motion.span>

                <div className="skills__info-icon-container">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
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
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Fade>
    </section>
  )
}

export default Skills