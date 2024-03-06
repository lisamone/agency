import React from 'react'

function Content() {
    return (
        <div className='w-[50%] p-10'>
            <h1 className=' text-green-600 text-6xl'>
                One-click solution for your static website.
            </h1>

            <p className='text-2xl my-[30px]'> 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, distinctio.
            </p> 

            <button className='px-[25px] py-[10px] bg-green-800 text-white text-xl rounded-md mr-[30px]'>
                View More
            </button>
            <button className='border-2 border-green-800 px-[25px] py-[10px] text-black text-xl rounded-md'>
                Watch Live
            </button>
        </div> 
    ) 
} 

export default Content