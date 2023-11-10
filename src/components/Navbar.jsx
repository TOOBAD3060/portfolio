import React, {useState} from 'react'
import {FaBars, FaTimes , FaGithub, FaLinkedin} from "react-icons/fa"
// import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from "../assets/toobad_logo.PNG" 
import {Link} from "react-scroll"

const Navbar = () => {

        const [isShowNavMenus,setIsShowNavMenus] = useState(false)

        const handleShowNavMenus = () => setIsShowNavMenus(!isShowNavMenus)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src= {Logo} alt='Logo Image' style={{width:"50px" }} />
        </div>
        {/* Menu */}
        
            <ul className='hidden md:flex'>
            <li>
                <Link to= 'home' smooth={true} duration={500} >
                    Home
                </Link>
            </li>
            <li>
                <Link to= 'about' smooth={true} duration={500} >
                    About
                </Link>
            </li>
            <li>
                <Link to= 'skills' smooth={true} duration={500} >
                    Skills
                </Link>
            </li>
            <li>
                <Link to= 'work' smooth={true} duration={500} >
                    Work
                </Link>
            </li>
            <li>
                <Link to= 'contact' smooth={true} duration={500} >
                    Contact
                </Link>
            </li>
            </ul>
        

        {/* Hamburger */}
         <div onClick={handleShowNavMenus} className='md:hidden z-10 cursor-pointer'>
           { isShowNavMenus ? <FaTimes /> : <FaBars /> }     
        </div>   

        {/* Mobile Menu */}
        <ul className = {!isShowNavMenus ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#8a192f] md:hidden'} >
            <li className='py-6 text-4xl'>
                <Link onClick={handleShowNavMenus} to= 'home' smooth={true} duration={500} >
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleShowNavMenus} to= 'about' smooth={true} duration={500} >
                    About   
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleShowNavMenus} to= 'skills' smooth={true} duration={500} >
                    Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleShowNavMenus} to= 'work' smooth={true} duration={500} >
                    Work
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleShowNavMenus} to= 'contact' smooth={true} duration={500} >
                    Contact
                </Link>
            </li>
        </ul>

            {/* Social icons */}
        <div  className='hidden lg:flex fixed flex-col top-[35%] left-0 '>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 '>
                    <a rel='noreferrer' target='_blank' href='https://linkedin.com/in/babatunde-olalere-820897240' className='flex justify-between items-center w-full text-gray-300'>
                        Linkedin <FaLinkedin size={30} /> 
                    </a> 
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] '>
                    <a rel='noreferrer' target='_blank' href='https://github.com/TOOBAD3060' className='flex justify-between items-center w-full text-gray-300' >
                        Github <FaGithub size={30} /> 
                    </a> 
                </li>

                {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] '>
                    <a href="mailto:olalerebabatunde2000@gmail.com?subject=Mail from our Website" className='flex justify-between items-center w-full text-gray-300' >
                        Email <HiOutlineMail size={30} /> 
                    </a> 
                </li> */}

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] '>
                    <a rel='noreferrer' target='_blank' href='https://drive.google.com/file/d/1kPVlT2a56oKqwUP1yOQjjzKMe_giWpHF/view?usp=drive_link' className='flex justify-between items-center w-full text-gray-300' >
                        Resume <BsFillPersonLinesFill size={30} /> 
                    </a> 
                </li>
            </ul>
        </div>


    </div>
  )
}

export default Navbar