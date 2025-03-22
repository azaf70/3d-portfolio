import { motion} from 'framer-motion';
import { styles} from '../styles.js';
import { staggerContainer} from '../utils/motion.js';

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.75 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        id={idName}
      >
        <Component />
      </motion.section>
    );
  }

export default SectionWrapper;