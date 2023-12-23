import React from 'react'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className="relative w-full xs:h-[700px] sm:h-[1000px] h-[800px] mx-auto">
      <div className={`
        ${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row item-start gap-5
      `}>
        <div className='flex flex-col items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#02D34A]'/>
          <div className='w-1 sm:h-80 h-40 green-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#02D34A]'>Giuseppe</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I develop 3d visuals, user <br className='sm:block hidden' /> interfaces and web applications</p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero