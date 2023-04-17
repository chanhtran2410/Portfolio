import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
const SocialLink = () => {
    const links =[
        {
            id: 1,
            child : (
                <>
                    LinkedIn <FaLinkedin size ={30}/>
                </>
            ),
            href : 'https://www.linkedin.com/in/ch%C3%A1nh-tr%E1%BA%A7n-l%C3%AA-trung-3b629921b/',
            style : 'rounded-tr-md'
        },
        {
            id: 2,
            child : (
                <>
                    Github <FaGithub size ={30}/>
                </>
            ),
            href : 'https://github.com/chanhtran2410/'
        },
        {
            id: 3,
            child : (
                <>
                    Email <HiOutlineMail size ={30}/>
                </>
            ),
            href : 'mailto:chanh.tran2410@hcmut.edu.vn'
        },
        {
            id: 4,
            child : (
                <>
                    Resume <BsFillPersonLinesFill size ={30}/>
                </>
            ),
            href : 'https://drive.google.com/file/d/1luc0ljVGJXJCWG50yqFcAoMK-0rqWy4f/view?usp=sharing',
            style : "rounded-br-md",
        },
    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({id,child,href,style})=>(
                <li key ={id} className={`flex justify-between items-center w-40 h-14 pl-6 pr-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${style}`}>
                <a href={href}
                className='flex justify-between items-center w-full text-white'
                target="_blank"
                rel="noreferrer">
                    <>
                       {child}
                    </>
                </a>
            </li>
            ))}
           
        </ul>
    </div>
  )
}

export default SocialLink