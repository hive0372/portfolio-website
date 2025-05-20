import { useContext, useState } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { ThemeContext } from '../../contexts/theme'
import { projects, skills, contact, experience, testimonials, certifications } from '../../portfolio'
import './Navbar.css'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='center nav'>
      <motion.div 
        className='nav__logo'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <a href='#top'>AB.</a>
      </motion.div>
      
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        <li className='nav__list-item'>
          <motion.a
            href='#top'
            onClick={toggleNavList}
            className='link link--nav'
            whileHover={{ scale: 1.1 }}
          >
            About
          </motion.a>
        </li>

        {experience.length ? (
          <li className='nav__list-item'>
            <motion.a
              href='#experience'
              onClick={toggleNavList}
              className='link link--nav'
              whileHover={{ scale: 1.1 }}
            >
              Experience
            </motion.a>
          </li>
        ) : null}

        {projects.length ? (
          <li className='nav__list-item'>
            <motion.a
              href='#projects'
              onClick={toggleNavList}
              className='link link--nav'
              whileHover={{ scale: 1.1 }}
            >
              Projects
            </motion.a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <motion.a
              href='#skills'
              onClick={toggleNavList}
              className='link link--nav'
              whileHover={{ scale: 1.1 }}
            >
              Skills
            </motion.a>
          </li>
        ) : null}
        
        {certifications.length ? (
          <li className='nav__list-item'>
            <motion.a
              href='#certifications'
              onClick={toggleNavList}
              className='link link--nav'
              whileHover={{ scale: 1.1 }}
            >
              Certifications
            </motion.a>
          </li>
        ) : null}
        
        {testimonials.length ? (
          <li className='nav__list-item'>
            <motion.a
              href='#testimonials'
              onClick={toggleNavList}
              className='link link--nav'
              whileHover={{ scale: 1.1 }}
            >
              Testimonials
            </motion.a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <motion.a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav'
              whileHover={{ scale: 1.1 }}
            >
              Contact
            </motion.a>
          </li>
        ) : null}
      </ul>

      <motion.button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
        whileHover={{ rotate: 180 }}
        transition={{ duration: 0.5 }}
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </motion.button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
