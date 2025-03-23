import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => {

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='bg-[#16181c] p-6 rounded-2xl xs:w-[340px] w-full hover:bg-[#1d1f23] transition-colors duration-200'
    >
      <div className='flex justify-between items-start'>
        <div className='flex gap-4'>
          <img
            src={image}
            alt={`feedback-by-${name}`}
            className='w-10 h-10 rounded-full object-cover border border-[#2f3336]'
          />
          <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-2'>
              <p className='text-white font-medium text-[15px] hover:underline cursor-pointer'>{name}</p>
              <span className='text-[#71767b] text-[14px]'>@{name.toLowerCase().replace(/\s+/g, '')}</span>
            </div>
            <p className='text-[#71767b] text-[13px]'>{designation} at {company}</p>
          </div>
        </div>
        <button
          onClick={() => window.open(' ', '_blank')}
          className={`px-4 py-1 rounded-full text-sm font-medium transition-colors duration-200 bg-[#2f3336] text-white hover:bg-[#3f4346] hover:text-white cursor-pointer`}
        >
          Visit Profile
        </button>
      </div>
      <div className='mt-3 mb-4'>
        <p className='text-white text-[15px] leading-relaxed'>{testimonial}</p>
      </div>
    </motion.div>
  );
};

export default FeedbackCard;