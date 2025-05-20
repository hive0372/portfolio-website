import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'
import { motion } from 'framer-motion'
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
    if (name.includes('python')) return <CodeIcon />
    if (name.includes('data science')) return <BubbleChartIcon />
    if (name.includes('machine learning')) return <MemoryIcon />
    if (name.includes('sql')) return <StorageIcon />
    if (name.includes('c++')) return <CodeIcon />
    if (name.includes('html')) return <LanguageIcon />
    if (name.includes('javascript')) return <DeveloperModeIcon />
    if (name.includes('visualization')) return <BarChartIcon />
    return <CodeIcon />
  }

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>
        <span style={{ display: 'inline-block', marginRight: '0.5rem' }}>
          <CodeIcon style={{ fontSize: '2rem' }} />
        </span>
        Skills
      </h2>

      <div className='skills-grid'>
        {skills.map((skill, index) => (
          <Fade bottom key={uniqid()}>
            <div 
              className='skill-card'
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className='skill-card-content'>
                <div className="skill-icon-container">
                  {getSkillIcon(skill.name)}
                </div>

                <h3 className='skill-name'>{skill.name}</h3>

                <div className='skill-level-container'>
                  <div 
                    className='skill-level-bar'
                    style={{ 
                      width: `${skill.level}%`,
                      backgroundColor: hoveredSkill === index ? 'var(--clr-primary)' : 'var(--clr-primary-light)'
                    }}
                  />
                </div>

                <span className='skill-level-text'>
                  {skill.level}%
                </span>

                {skill.description && (
                  <div className="skill-info">
                    <div className="info-icon-container">
                      <InfoIcon />
                    </div>
                    
                    {hoveredSkill === index && (
                      <div className="skill-tooltip">
                        {skill.description}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  )
}

export default Skills