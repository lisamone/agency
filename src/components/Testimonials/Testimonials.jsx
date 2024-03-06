import React from 'react'
import Card from './Card'
import abc from '../../Assets/abc.jpg'

function Testimonials() {
    return (
        <div className=' p-8 flex gap-5'>
            <Card 
            img={abc.jpg}
            description =  'Vitae suscipit tellus mauris a diam maecenas .'
            name= 'Celia Almeda'
            role='wev developer'
            /> 
            <Card 
            description =  'Vitae suscipit tellus mauris a diam maecenas .'
            name= 'Nat Reynolds'
            role='Android Developer'
            /> 
            <Card
            description =  'Vitae suscipit tellus mauris a diam maecenas .'
            name= 'Bob Roberts'
            role= 'UI/UX Designer'
            /> 
            <Card
            description =  'Vitae suscipit tellus mauris a diam maecenas .'
            name= 'Mattie Smith'
            role='Full Stack Developer'
            />  
        </div>
    )
}

export default Testimonials