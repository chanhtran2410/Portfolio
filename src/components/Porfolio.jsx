import React from 'react'
import petapp from "../assets/portfolio/petapp.png";
import ledis from "../assets/portfolio/ledis.png";
import minisearch from "../assets/portfolio/minisearch.png";
import ocular from "../assets/portfolio/ocular.png";
import footballreport from "../assets/portfolio/footballreport.png";
import dMart from  "../assets/portfolio/dMart.png";

const Porfolio = () => {
    const projects =[
        {
            id : 4,
            name: 'SMART FARM',
            src : ocular,
            code : "https://github.com/ShinyKiwis/smart-farm",
            report : false
        },
        {
            id : 2,
            name: 'ONSITE ORDERING APP',
            src : ledis,
            code : "https://github.com/chanhtran2410/MeHungry_FE" ,
            report : false,
        },
        {
            id : 6,
            name: 'WASTE MANAGING SYSTEM',
            src : dMart ,
            code : "https://github.com/chanhtran2410/SE-Capstone-Project",
            report: false,
        },
        {
            id : 3,
            name: 'FAKENEWS LABELING',
            src : minisearch,
            demo : "",
            code : "https://github.com/chanhtran2410/HCMUT_Programing_Integration_Project",
            report : false
        },
        {
            id : 1,
            name: 'CHAT APP',
            src : petapp,
            code : "https://github.com/chanhtran2410/HCMUT_ComputerNetwork_Assignment",
            report : false
        },
        {
            id : 5,
            name: 'HOTEL MANAGING SYSTEM',
            src : footballreport,
            code : "https://github.com/chanhtran2410/HCMUT_Database_Assignment",
            report : false
        },
    ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full md:h-full text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6 text-xl'>Check out some of my work</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {projects.map(({id,name,src,demo,code,report})=>(
                    <div id ={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img  src={src} alt="" className='rounded-md duration-200 hover:scale-105' style={{width:'100%',height:'12em'}}/>
                    {report ? (
                    <div className='flex items-center justify-center'>
                    <a href={demo}>
                    <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Report</button>
                    </a>
                        
                    </div>
                    ) : (
                    <div className='flex items-center justify-center'>
                    <h6 style={{textAlign:'center'}}>{name}</h6>
                    <a href={code} >
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                    </a>                           
                    </div>
                    )}
                    
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Porfolio