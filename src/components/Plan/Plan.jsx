import React from 'react'
import PlanCard from './PlanCard'

function Plan() {
  return (
    <div className=' p-8 flex gap-5' >
        <PlanCard
        plantime= 'Starter Plan'
        cost= 'Free'
        items='Free static.app domain included, No credit card'/>
        <PlanCard
        plantime='Yearly Plan'
        cost='$9/month'
        items='Free static.app domain included, No credit card'
        />
        <PlanCard
         plantime='Monthly Plan'
         cost='$12/month'
         items='Free static.app domain included, No credit card'
        />


    </div>
  )
}

export default Plan