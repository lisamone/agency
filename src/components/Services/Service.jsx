import React from 'react'

function Service({icon, title, description, }) {
    return (
        <div className=' w-[45%] bg-white rounded-lg p-[35px]'>
            <div className='w-full flex justify-center'>
                <div className=' bg-green-400 inline-block'>
                    <img 
                        className='h-[40px] w-[40px]'
                        src={icon} alt="" srcset="" />
            </div>
            </div>
            <h1 className=' text-green-800 text-2xl text-center my-4'>
                {title}
            </h1>
            <p className='py-[10px]'>
                {description}
            </p>

            <button className=' bg-green-800 text-white text-md px-[15px] py-[8px] rounded-md'>
                View More
            </button>
        </div>
    )
}

export default Service; 