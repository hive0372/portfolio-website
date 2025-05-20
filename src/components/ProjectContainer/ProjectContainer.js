import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import CategoryIcon from '@material-ui/icons/Category'
import CodeIcon from '@material-ui/icons/Code'
import StorageIcon from '@material-ui/icons/Storage'
import BarChartIcon from '@material-ui/icons/BarChart'
import BubbleChartIcon from '@material-ui/icons/BubbleChart'
import './ProjectContainer.css'
import { motion } from 'framer-motion'
import Fade from 'react-reveal/Fade'
import { useState, useEffect } from 'react'

const ProjectContainer = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [elementPosition, setElementPosition] = useState({ top: 0, left: 0, width: 0, height: 0 })
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  
  // Get project icon based on category
  const getProjectIcon = () => {
    const category = project.category?.toLowerCase() || '';
    
    if (category.includes('database')) return <StorageIcon className="project__category-icon" />;
    if (category.includes('machine learning')) return <BubbleChartIcon className="project__category-icon" />;
    if (category.includes('data')) return <BarChartIcon className="project__category-icon" />;
    return <CategoryIcon className="project__category-icon" />;
  };
  
  // Track mouse position for 3D effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Calculate 3D rotation effect
  useEffect(() => {
    if (isHovered && elementPosition.width > 0) {
      const centerX = elementPosition.left + elementPosition.width / 2;
      const centerY = elementPosition.top + elementPosition.height / 2;
      
      // Calculate rotation based on mouse distance from center (max 10 degrees)
      const rotateY = ((mousePosition.x - centerX) / (elementPosition.width / 2)) * 5;
      const rotateX = ((centerY - mousePosition.y) / (elementPosition.height / 2)) * 5;
      
      setRotation({ x: rotateX, y: rotateY });
    } else {
      setRotation({ x: 0, y: 0 });
    }
  }, [mousePosition, isHovered, elementPosition]);
  
  // Update element position on hover
  const updateElementPosition = (element) => {
    if (element) {
      const rect = element.getBoundingClientRect();
      setElementPosition({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height
      });
    }
  };
  
  return (
  <Fade bottom duration={1000}>
    <motion.div 
      className='project project-3d'
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
      whileHover={{ 
        y: -10,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
      }}
      transition={{ duration: 0.3 }}
      onHoverStart={(e) => {
        setIsHovered(true);
        updateElementPosition(e.target);
      }}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="project__inner"
        style={{
          transformStyle: 'preserve-3d'
        }}
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20
        }}
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
              style={{
                transformStyle: 'preserve-3d',
                transform: 'translateZ(10px)'
              }}
            />
            <motion.div 
              className="project__image-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              style={{
                transformStyle: 'preserve-3d',
                transform: 'translateZ(20px)'
              }}
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
        
        <motion.div 
          className='project__content'
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translateZ(5px)'
          }}
        >
          <motion.h3 
            className='project__title'
            style={{
              transformStyle: 'preserve-3d',
              transform: 'translateZ(15px)'
            }}
          >
            {project.name}
          </motion.h3>
          
          {project.category && (
            <motion.div 
              className='project__category project__category-3d'
              animate={{ 
                backgroundColor: isHovered ? 'var(--clr-primary)' : 'var(--clr-bg)',
                color: isHovered ? 'var(--clr-bg)' : 'var(--clr-primary)',
                boxShadow: isHovered ? '0 5px 15px rgba(var(--rgb-primary), 0.3)' : 'none'
              }}
              style={{
                transformStyle: 'preserve-3d',
                transform: 'translateZ(20px)'
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

          <motion.p 
            className='project__description'
            style={{
              transformStyle: 'preserve-3d',
              transform: 'translateZ(10px)'
            }}
          >
            {project.description}
          </motion.p>
          
          {project.stack && (
            <motion.ul 
              className='project__stack'
              style={{
                transformStyle: 'preserve-3d',
                transform: 'translateZ(15px)'
              }}
            >
              {project.stack.map((item, index) => (
                <motion.li 
                  key={uniqid()} 
                  className='project__stack-item project__stack-item-3d'
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
            </motion.ul>
          )}

          <motion.div 
            className='project__links'
            style={{
              transformStyle: 'preserve-3d',
              transform: 'translateZ(20px)'
            }}
          >
            {project.sourceCode && (
              <motion.a
                href={project.sourceCode}
                aria-label='source code'
                className='project__link project__link-3d'
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
                <motion.div
                  animate={isHovered ? { rotateY: [0, 360] } : { rotateY: 0 }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                >
                  <GitHubIcon className="project__link-icon" />
                </motion.div>
                Code
              </motion.a>
            )}

            {project.livePreview && (
              <motion.a
                href={project.livePreview}
                aria-label='live preview'
                className='project__link project__link-3d'
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
                <motion.div
                  animate={isHovered ? { rotateY: [0, 360] } : { rotateY: 0 }}
                  transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.2 }}
                >
                  <LaunchIcon className="project__link-icon" />
                </motion.div>
                Demo
              </motion.a>
            )}
          </motion.div>
        </motion.div>
        
        {/* 3D decorative elements */}
        <div className="project__decorations">
          <motion.div 
            className="project__decoration project__decoration-1"
            animate={{
              rotateZ: [0, 360],
              y: [0, -5, 0]
            }}
            transition={{
              rotateZ: { duration: 20, repeat: Infinity, ease: "linear" },
              y: { duration: 2, repeat: Infinity, repeatType: "reverse" }
            }}
          />
          <motion.div 
            className="project__decoration project__decoration-2"
            animate={{
              rotateZ: [360, 0],
              x: [0, 5, 0]
            }}
            transition={{
              rotateZ: { duration: 25, repeat: Infinity, ease: "linear" },
              x: { duration: 3, repeat: Infinity, repeatType: "reverse" }
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  </Fade>
  )
}

export default ProjectContainer
