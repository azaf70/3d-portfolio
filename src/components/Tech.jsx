import React from 'react'
import { SectionWrapper } from '../hoc/index.js'
import { technologies } from '../constants/index.js';
import { BallCanvas } from './canvas'
import { textVariant } from '../utils/motion.js';
import { styles } from '../styles.js';
import { motion } from 'framer-motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>
          What I have worked with
        </p>
        <h2 className={styles.sectionHeadText}>
          Technologies
        </h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "tech")