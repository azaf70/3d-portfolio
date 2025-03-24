import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { loadSlim } from '@tsparticles/slim'

const Hero = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      style: {
        position: "fixed",
        width: "100%",
        height: "100%",
        zIndex: -1,
      },
      background: {
        color: {
          value: "#090909"
        }
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 2,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ["#bf61ff", "#00cea8", "#f272c8"],
        },
        links: {
          color: "#00cea8",
          distance: 100,
          enable: true,
          opacity: 0.6,
          width: 2,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          outModes: {
            default: "bounce",
          },
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200
          }
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "square",
        },
        size: {
          value: { min: 1, max: 4 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <section className='relative w-full h-screen mx-auto flex items-center'>
        <Particles
          id="tsparticles"
          className='fixed inset-0 z-[-2]'
          particlesLoaded={particlesLoaded}
          options={options}
        >
        </Particles>
        <div className='absolute inset-0 flex items-center justify-center z-10'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0, ease: "easeOut" }}
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
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              className='mt-8 flex gap-4 justify-center'
            >
              <a
                href='#work'
                className='px-6 py-3 rounded-full bg-gradient-to-r from-[#00cea8] to-[#bf61ff] text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300'
              >
                View My Experience
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
    );
  }
}

export default Hero