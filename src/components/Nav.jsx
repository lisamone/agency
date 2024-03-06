import React from 'react'
import Menu from './Menu'

export default function Nav() {
    return (
        <div className='h-[80px] bg-black flex justify-between'>
            <h1 className=' text-green-600 text-3xl pt-[15px]'>
                DEBUG ENTITY 
            </h1>

            <Menu /> 
        </div>
    )
}
