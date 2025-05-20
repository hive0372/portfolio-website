import React from 'react'
import { motion } from 'framer-motion'
import './CloudBackground.css'

const CloudBackground = () => {
  // Generate random positions for clouds
  const generateClouds = (count) => {
    const clouds = []
    for (let i = 0; i < count; i++) {
      clouds.push({
        id: i,
        size: Math.random() * 100 + 50, // Random size between 50-150px
        top: Math.random() * 100, // Random vertical position
        left: Math.random() * 100, // Random horizontal position
        speed: Math.random() * 50 + 30, // Random animation speed
        delay: Math.random() * 10, // Random delay for animation start
        opacity: Math.random() * 0.5 + 0.1, // Random opacity
        scale: Math.random() * 0.5 + 0.8, // Random scale
      })
    }
    return clouds
  }

  const clouds = generateClouds(8) // Generate 8 clouds

  return (
    <div className="cloud-background">
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          className="cloud"
          style={{
            width: cloud.size,
            height: cloud.size * 0.6,
            top: `${cloud.top}%`,
            left: `${cloud.left}%`,
            opacity: cloud.opacity,
          }}
          initial={{ x: '-100vw', scale: cloud.scale }}
          animate={{ 
            x: '100vw',
            scale: [cloud.scale, cloud.scale * 1.1, cloud.scale],
            y: [0, -10, 0, 10, 0],
          }}
          transition={{ 
            x: { 
              duration: cloud.speed, 
              repeat: Infinity, 
              delay: cloud.delay,
              ease: "linear"
            },
            y: {
              duration: cloud.speed / 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            },
            scale: {
              duration: cloud.speed / 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
        >
          <div className="cloud-part cloud-part-1"></div>
          <div className="cloud-part cloud-part-2"></div>
          <div className="cloud-part cloud-part-3"></div>
        </motion.div>
      ))}
    </div>
  )
}

export default CloudBackground