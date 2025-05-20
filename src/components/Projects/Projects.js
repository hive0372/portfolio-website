import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'
import { motion, AnimatePresence } from 'framer-motion'
import Fade from 'react-reveal/Fade'
import { useState, useEffect } from 'react'
import FilterListIcon from '@material-ui/icons/FilterList'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [showFilters, setShowFilters] = useState(false)
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  
  useEffect(() => {
    // Animate cards out and then in when filter changes
    setAnimateCard({ y: 100, opacity: 0 })
    
    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 })
    }, 500)
  }, [activeFilter])
  
  if (!projects.length) return null

  // Get unique categories from projects
  const categories = ['All', ...new Set(projects.map(project => 
    project.category || 'Other'
  ))]

  // Filter projects based on active category
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <section id='projects' className='section projects'>
      <Fade top>
        <h2 className='section__title'>Projects</h2>
      </Fade>

      <div className="projects__filter-container">
        <motion.button 
          className="projects__filter-toggle"
          onClick={() => setShowFilters(!showFilters)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: showFilters ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FilterListIcon />
          <span>Filter Projects</span>
        </motion.button>
        
        <AnimatePresence>
          {showFilters && (
            <motion.div 
              className="projects__filters"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {categories.map(category => (
                <motion.button
                  key={category}
                  className={`projects__filter-btn ${activeFilter === category ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          className='projects__grid'
          key={activeFilter} // Re-render animation when filter changes
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, ...animateCard }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project) => (
            <ProjectContainer key={uniqid()} project={project} />
          ))}
          
          {filteredProjects.length === 0 && (
            <motion.div 
              className="projects__empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p>No projects found in this category.</p>
              <motion.button 
                className="projects__reset-btn"
                onClick={() => setActiveFilter('All')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Show All Projects
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

export default Projects
