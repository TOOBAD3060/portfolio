import React from 'react'
import WorkImg from '../assets/projects/workImg.jpeg'
import realEstate from '../assets/projects/realestate.jpg'
import mzienet from '../assets/projects/mzienet_systems.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f] '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
             <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'> Check out some of my recent work</p>
             </div>   

                {/* Card Container */}
             <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 '>
                
                {/* Grid item */}
             <div style={{backgroundImage:`url(${mzienet})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                    
                    {/* Hover effects */}
                 <div className='opacity-0 group-hover:opacity-100 '>
                      <p className='text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider '>
HTML + CSS + JS Application
                        </span>
                      </p>
                        <div className='pt-8 text-center '>
                            <a rel='noreferrer' target='_blank' href='https://mzienet-project.netlify.app'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>
                                    Demo
                                </button>
                            </a> 
                            <a rel='noreferrer' target='_blank' href='https://github.com/TOOBAD3060/mzienet'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                         {/* Grid Item */}

                <div style={{backgroundImage:`url(${WorkImg})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                    
                    {/* Hover effects */}
                 <div className='opacity-0 group-hover:opacity-100 '>
                    <p className='text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider '>
React JS + CSS Application
                        </span>
                    </p>    
                        <div className='pt-8 text-center '>
                            <a rel='noreferrer' target='_blank' href='https://reactquizclone.netlify.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>
                                    Demo
                                </button>
                            </a> 
                            <a  rel='noreferrer' target='_blank' href='https://github.com/TOOBAD3060/react_quiz_app'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                         {/* Grid Item */}


                <div style={{backgroundImage:`url(${realEstate})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                    
                    {/* Hover effects */}
                 <div className='opacity-0 group-hover:opacity-100 '>
                    <p className='text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider '>
React JS + Tailwind CSS Application
                        </span>
                    </p>    
                        <div className='pt-8 text-center '>
                            <a rel='noreferrer' target='_blank'  href='https://toobadtailwindnikeapp.netlify.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>
                                    Demo
                                </button>
                            </a> 
                            <a rel='noreferrer' target='_blank' href='https://github.com/TOOBAD3060/tailwind_nike_app'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                         {/* Grid Item */}

                {/* <div style={{backgroundImage:`url(${WorkImg})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                     */}
                    {/* Hover effects */}
                    {/* <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider '>
React JS Application
                        </span>
                        <div className='pt-8 text-center '>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>
                                    Demo
                                </button>
                            </a> 
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div> */}
                        {/* Grid Item */}
                {/* <div style={{backgroundImage:`url(${realEstate})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                     */}
                    {/* Hover effects */}
                    {/* <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider '>
React JS Application
                        </span>
                        <div className='pt-8 text-center '>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>
                                    Demo
                                </button>
                            </a> 
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div> */}
                            {/* Grid Item */}
                {/* <div style={{backgroundImage:`url(${WorkImg})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                     */}
                    {/* Hover effects */}
                    {/* <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider '>
React JS Application
                        </span>
                        <div className='pt-8 text-center '>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>
                                    Demo
                                </button>
                            </a> 
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div> */}
             </div>
             
        </div>
    </div>
  )
}

export default Work