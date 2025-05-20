import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import CategoryIcon from '@material-ui/icons/Category'
import './ProjectContainer.css'
import { motion } from 'framer-motion'
import Fade from 'react-reveal/Fade'
import { useState } from 'react'

const ProjectContainer = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
  <Fade bottom duration={1000}>
    <motion.div 
      className='project'
      whileHover={{ 
        y: -10,
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)'
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
              <span>View Project</span>
            </motion.div>
          </motion.div>
        </div>
      )}
      
      <div className='project__content'>
        <h3 className='project__title'>{project.name}</h3>
        
        {project.category && (
          <motion.div 
            className='project__category'
            animate={{ 
              backgroundColor: isHovered ? 'var(--clr-primary)' : 'var(--clr-bg)',
              color: isHovered ? 'var(--clr-bg)' : 'var(--clr-primary)'
            }}
          >
            <CategoryIcon className='project__category-icon' />
            {project.category}
          </motion.div>
        )}

        <p className='project__description'>{project.description}</p>
        
        {project.stack && (
          <ul className='project__stack'>
            {project.stack.map((item) => (
              <motion.li 
                key={uniqid()} 
                className='project__stack-item'
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: 'var(--clr-primary)',
                  color: 'var(--clr-bg)'
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
                color: 'var(--clr-bg)'
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <GitHubIcon className="project__link-icon" /> Code
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
                color: 'var(--clr-bg)'
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <LaunchIcon className="project__link-icon" /> Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  </Fade>
  )
}

export default ProjectContainer
