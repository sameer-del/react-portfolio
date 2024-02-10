import React from 'react'
import { motion } from 'framer-motion';
const Header = () => {
  return (
    <div className='h-[15vh] flex items-center justify-between lg:px-[8rem]  px-5'>
        <motion.a
        initial={{x:-50,opacity:0}}
         animate={{x:0,opacity:1}}
         transition={{duration:1,}}
         href="#" className=' font-heading text-[32px] font-bold  text-white leading-4 uppercase lg:pl-[50px] lg:tracking-[5px]'>sameer</motion.a>
        <motion.button
        initial={{x:-50,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:1,}}
         className='btn font-heading w-[150px] lg:mr-16 rounded-xl px-6 py-1 text-white font-bold pb-[8px]'>contact</motion.button>
    </div>
  )
}

export default Header