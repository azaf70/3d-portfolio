import React from 'react'
import { SectionWrapper } from '../hoc/index.js'
import { motion } from 'framer-motion'
import { styles } from '../styles.js';
import { experiences} from '../constants/index.js';
import { fadeIn, textVariant } from '../utils/motion.js';

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          What I have done so far
        </p>
        <h2 className={styles.sectionHeadText}>
          Work Experience
        </h2>
      </motion.div>
      <div className="mt-20">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {experiences.map((experience, index) => (
            <motion.li
              key={experience.title}
              variants={fadeIn("up", "spring", index * 0.5, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              {index !== 0 && <hr />}
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
              </div>
              <div className={`${index % 2 === 0 ? 'timeline-start' : 'timeline-end'} my-4 md:mb-10 ${index % 2 === 0 ? 'md:text-end' : ''}}`}>
                <time className="font-mono italic">{experience.date}</time>
                <div className="text-lg font-black">{experience.title}</div>
                <div className="text-base font-semibold text-secondary">{experience.company_name}</div>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  {experience.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-sm text-gray-300">{point}</li>
                  ))}
                </ul>
              </div>
              {index !== experiences.length - 1 && <hr />}
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')