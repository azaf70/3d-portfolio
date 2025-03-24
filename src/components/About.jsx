import React from 'react'
import Tilt from 'react-parallax-tilt';
import {motion} from 'framer-motion'

import {styles} from '../styles.js';
import {services} from '../constants/index.js';
import {fadeIn, textVariant} from '../utils/motion.js';
import { SectionWrapper} from '../hoc/index.js';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className="background-stripes parallax-effect-glare-scale rounded-xl overflow-hidden"
    perspective={1000}
    glareEnable={true}
    glareMaxOpacity={0.25}
    scale={1.01}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-xl inner-element'
    >
      <div
        className='bg-gradient-to-b from-primary-content to-secondary-content rounded-xl py-5 px-4 h-48 flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0.2)}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview
        </h2>
      </motion.div>

      <motion.p
        className='text-lg text-gray-300 leading-relaxed mt-4'
        variants={fadeIn("up", "spring", 0.5, 1.25)}
      >
        Experienced professional with a successful track record of <strong className='text-secondary'>4+</strong> years in
        maintaining, enhancing, and developing both legacy systems and public-facing applications on a commercial level.
        Proficient in utilizing the latest technologies to create dynamic web applications that drive optimal
        user experiences. Known for delivering exceptional user support and maximizing efficiency in Agile
        environments.
      </motion.p>

      <div className='mt-20 grid grid-cols-2 gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')