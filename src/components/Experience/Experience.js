import React from 'react'
import { motion } from 'framer-motion'
import { experience } from '../../portfolio'
import './Experience.css'
import Fade from 'react-reveal/Fade'

const Experience = () => {
  if (!experience.length) return null

  return (
    <section className='section experience' id='experience'>
      <h2 className='section__title'>Experience</h2>
      <div className='experience__grid'>
        {experience.map((exp, index) => (
          <Fade bottom key={index} duration={1000} delay={index * 200}>
            <motion.div 
              className='experience__item'
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)'
              }}
              transition={{ duration: 0.3 }}
            >
              <div className='experience__header'>
                <h3 className='experience__role'>{exp.role}</h3>
                <p className='experience__company'>{exp.company}</p>
                <p className='experience__duration'>{exp.duration}</p>
              </div>
              <ul className='experience__description'>
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              {exp.technologies && (
                <div className='experience__technologies'>
                  <h4>Technologies:</h4>
                  <div className='experience__tech-list'>
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className='experience__tech-item'>{tech}</span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </Fade>
        ))}
      </div>
    </section>
  )
}

export default Experience