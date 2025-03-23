import React from 'react'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { useCallback } from 'react'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

const Hero = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <section className='relative w-full h-screen mx-auto'>
      <Particles
        id="tsparticles"
        className='fixed inset-0 z-[-2]'
        init={particlesInit}
        options={{
          fullScreen: false,
          style: {
            position: "fixed",
            width: "100%",
            height: "100%",
            zIndex: -1
          },
          background: {
            color: {
              value: "#050816"
            }
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: ["#bf61ff", "#00cea8", "#f272c8"]
            },
            links: {
              color: "#00cea8",
              distance: 150,
              enable: true,
              opacity: 0.8,
              width: 2
            },
            collisions: {
              enable: true
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce"
              },
              random: false,
              speed: 2,
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 180
            },
            opacity: {
              value: 1
            },
            shape: {
              type: "circle"
            },
            size: {
              value: { min: 2, max: 5 }
            }
          },
          detectRetina: true,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse"
              },
              onClick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              push: {
                quantity: 6
              },
              repulse: {
                distance: 150,
                duration: 0.4
              }
            }
          }
        }}
      />

      <div className='absolute inset-0 flex items-center justify-center z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='text-center px-6'
        >
          <h1 className={`${styles.heroHeadText} text-white mb-4`}>
            Hi, I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#00cea8] to-[#bf61ff]'>Abdullah Zafar</span>
          </h1>
          <p className={`${styles.heroSubText} text-white/80 max-w-3xl mx-auto`}>
            I develop web applications, user interfaces and create digital experiences that leave a lasting impression.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className='mt-8 flex gap-4 justify-center'
          >
            <a 
              href='#projects'
              className='px-6 py-3 rounded-full bg-gradient-to-r from-[#00cea8] to-[#bf61ff] text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300'
            >
              View My Work
            </a>
            <a 
              href='#contact'
              className='px-6 py-3 rounded-full border-2 border-[#00cea8] text-white font-semibold hover:bg-[#00cea8]/10 transition-all duration-300'
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero