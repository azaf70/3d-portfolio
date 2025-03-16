import React from 'react'
import {motion} from 'framer-motion';
import {styles} from '../styles'
import {ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto '>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className="status status-secondary animate-bounce w-5 h-5"></div>
          <div className="w-1 h-40 bg-gradient-to-b from-secondary to-transparent"></div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-secondary'>Abdullah Zafar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            I develop web applications, user interfaces <br className='sm:block hidden' />
             and 3d visuals.
          </p>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  )
}

export default Hero