import React from 'react'
import { testimonials } from '../constants'
import { SectionWrapper } from '../hoc'
import FeedbackCard from './FeedbackCard.jsx';
import Marquee from "react-fast-marquee";
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion.js';
import { styles } from '../styles.js';

const Feedbacks = () => {
return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>
          What people say
        </p>
        <h2 className={styles.sectionHeadText}>
          Testimonials
        </h2>
      </motion.div>
      <Marquee pauseOnHover={true}>
        <div className='flex gap-10 px-5 my-4'>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </Marquee>
    </>
  )
}

export default SectionWrapper(Feedbacks, "feedbacks");