import React from 'react'
import myImage from "../assets/ava2.png"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div name ="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
        <div className='max-w-screen-lg  mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center mt-16 h-full'>
                <h2 className='text-4xl sm:text-5xl font-bold text-white'>Hi, I'm Chánh</h2>
                <p className='text-gray-400 py-3 text-xl max-w-md'>I'm a computer science undergraduate at VNUHCM - University of Technology. </p>
                <p className='text-gray-400 py-3 text-xl max-w-md'> And I’m looking for an internship opportunity to help me grow my skills and get some experience in the field of software engineering and web-development.</p>
                <div>
                    <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-sky-400 to-blue-500 cursor-pointer hover:scale-105 duration-100'>
                        Porfolio 
                         <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25}
                                className="ml-1"
                            />
                         </span>      
                    </Link>
                </div>
            </div>
            <div className='mx-16'>
                <img 
                src = {myImage}
                alt="my profile"
                className='mx-auto h-100 w-80 object-scale-down  '
                style={{borderRadius:'15px'}}
                />
            </div>
        </div>
    </div>
  
  )
}

export default Home