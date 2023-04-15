import React from 'react'

const Contact = () => {
  return (
    <div name = "contact" className='w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 py-10 text-white'>
        <div className='flex flex-col p-4 mt-6 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>Contact</p>
                <p className='py-6 text-2xl'>Submit the form below to get in touch with me or you can contact me via the links bar on the left handside</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/deca980e-3f76-4ea5-a46f-3baee1d7095b' method = "POST" className='flex flex-col w-full md:w-1/2'>
                    <input type = "text" name="name" placeholder='Your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type = "text" name="email" placeholder='Your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea type = "text" name="message" placeholder='Enter your message' rows = "10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>

                    <button className='text-white bg-gradient-to-b from-sky-400 to-blue-500 
                    px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                        Let's talk
                    </button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact