import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'


const text = {
  slideDown: { 
      opacity: 0,
      y:150,
      scale:0,
      },
  slideUp: { 
      opacity: 1, 
      y:0,
      scale:1,
      transition: {
      type: "spring",
      bounce: 0.4,
      duration:5,
      }
      },
}

const About = () => {

    
    
                               

  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300 ' >
        <div className='flex flex-col justify-center items-center w-full h-full '>
            <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8 '>
                <div className='sm:text-right pb-8 pl-4 '>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>About</p>
                </div>     
                <div></div>        
             </div>  
             <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 '>
                    <div className='sm:text-right text-4xl font-bold '>
                        <motion.p variants={text} initial="slideDown" whileInView="slideUp" viewport={{once:true, amount:0}}
                        > Hi. I'm Babs, nice to meet you. Please take a look around. </motion.p>
                    </div>
                    <div>
                        <p>
                        I'm a Frontend Developer specializing in 
                building exceptional digital experiences.
                Currently, I'm focused on building responsive
                Frontend Web Applications. 
                        </p>
                    
                 </div>             
            </div>
        </div>
    </div>
  )
}

export default About