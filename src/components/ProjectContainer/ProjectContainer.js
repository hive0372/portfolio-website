import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import CategoryIcon from '@material-ui/icons/Category'
import StorageIcon from '@material-ui/icons/Storage'
import BarChartIcon from '@material-ui/icons/BarChart'
import BubbleChartIcon from '@material-ui/icons/BubbleChart'
import './ProjectContainer.css'
import { motion } from 'framer-motion'
import Fade from 'react-reveal/Fade'
import { useState } from 'react'

const ProjectContainer = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  // Get project icon based on category
  const getProjectIcon = () => {
    const category = project.category?.toLowerCase() || '';
    
    if (category.includes('database')) return <StorageIcon className="project__category-icon" />;
    if (category.includes('machine learning')) return <BubbleChartIcon className="project__category-icon" />;
    if (category.includes('data')) return <BarChartIcon className="project__category-icon" />;
    return <CategoryIcon className="project__category-icon" />;
  };
  
  return (
  <Fade bottom duration={1000}>
    <motion.div 
      className='project'
      whileHover={{ 
        y: -10,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
      }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {project.imageUrl && (
        <div className='project__image-container'>
          <motion.img 
            src={project.imageUrl} 
            alt={project.name} 
            className='project__image'
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div 
            className="project__image-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="project__overlay-content"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <motion.span
                animate={{
                  scale: [1, 1.1, 1],
                  textShadow: [
                    '0 0 0px rgba(255,255,255,0)',
                    '0 0 10px rgba(255,255,255,0.5)',
                    '0 0 0px rgba(255,255,255,0)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
              >
                View Project
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      )}
      
      <div className='project__content'>
        <h3 className='project__title'>
          {project.name}
        </h3>
        
        {project.category && (
          <motion.div 
            className='project__category'
            animate={{ 
              backgroundColor: isHovered ? 'var(--clr-primary)' : 'var(--clr-bg)',
              color: isHovered ? 'var(--clr-bg)' : 'var(--clr-primary)',
              boxShadow: isHovered ? '0 5px 15px rgba(var(--rgb-primary), 0.3)' : 'none'
            }}
          >
            <motion.div
              animate={{
                rotateY: isHovered ? [0, 360] : 0
              }}
              transition={{
                duration: 1,
                ease: 'easeInOut'
              }}
            >
              {getProjectIcon()}
            </motion.div>
            {project.category}
          </motion.div>
        )}

        <p className='project__description'>
          {project.description}
        </p>
        
        {project.stack && (
          <ul className='project__stack'>
            {project.stack.map((item, index) => (
              <motion.li 
                key={uniqid()} 
                className='project__stack-item'
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: 'var(--clr-primary)',
                  color: 'var(--clr-bg)',
                  y: -5,
                  boxShadow: '0 5px 15px rgba(var(--rgb-primary), 0.3)'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.1 + (index * 0.05)
                }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        )}

        <div className='project__links'>
          {project.sourceCode && (
            <motion.a
              href={project.sourceCode}
              aria-label='source code'
              className='project__link'
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: 'var(--clr-primary)',
                color: 'var(--clr-bg)',
                boxShadow: '0 5px 15px rgba(var(--rgb-primary), 0.3)'
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <GitHubIcon className="project__link-icon" />
              Code
            </motion.a>
          )}

          {project.livePreview && (
            <motion.a
              href={project.livePreview}
              aria-label='live preview'
              className='project__link'
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: 'var(--clr-primary)',
                color: 'var(--clr-bg)',
                boxShadow: '0 5px 15px rgba(var(--rgb-primary), 0.3)'
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <LaunchIcon className="project__link-icon" />
              Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  </Fade>
  )
}

export default ProjectContainer
