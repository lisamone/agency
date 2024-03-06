import React from 'react'
import hero_img from '../Assets/hero_img.jpeg'

function HeroImage() {
    return (
        <div className='w-[50%] flex justify-center'>
            <img 
                src={hero_img} 
                className='h-[450px]'
                alt="" srcset="" />
        </div>
    )
}

export default HeroImage