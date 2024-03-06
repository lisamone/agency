import React from 'react'

function PlanCard({plantime, cost, items}) {
  return (

    <div className=' bg-gray-200 p-5 w-[25%]'>
            
            <h1 className=' text-green-600 text-4xl'>
                { plantime}
            </h1> 

            <p className=' text-green-600 text-6xl'>
                {cost}
            </p> 

            <button className=' bg-green-800 text-white text-md px-[15px] py-[8px] rounded-md'>
                proceed
            </button>

            <p className='text-2xl'>
                {items}
            </p>
        </div>
  )
}

export default PlanCard