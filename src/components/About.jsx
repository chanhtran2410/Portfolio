import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-8  '>
            During my time at Ho Chi Minh City University of Technology, 
            I have gained a range of skills and experiences that will be invaluable as I continue to build my career as a developer. 
            Throughout my studies, I have had the opportunity to work on a variety of projects, from developing software to building and implementing complex algorithms. 
            This has given me a solid foundation in programming languages such as Java and Python, as well as practical experience in the web development process.
            </p>

            <br/>

            <p className='text-xl'>
            As a computer science major, I have always been interested in exploring the potential of the internet 
            and how it can be used to create innovative solutions for businesses and individuals alike. 
            I have been fortunate enough to work on several web development projects throughout my studies, allowing me to develop a strong understanding of HTML, CSS, and JavaScript. 
            Moving forward, I am eager to continue expanding my skills in this area and explore new technologies and platforms as they emerge.

            </p>
        </div>
    </div>
  )
}

export default About