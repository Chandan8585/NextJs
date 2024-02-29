import React from 'react'
import { Spotlight } from './ui/spotlight'
import { Button } from './ui/moving-border'

const HeroSection = () => {
  return (
    <div className='h-auto md-h-[40rem] w-full rounded flex flex-col items-center justify-center relative overflow-hidden mx-auto my-40 md:py-6'>
       
<h1 className=''>Music Classes</h1>
<p className='w-80'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A eligendi autem obcaecati sed adipisci nihil, consequuntur assumenda. Nesciunt blanditiis cum aliquam magni culpa officiis earum, aspernatur maiores, optio, aut est?</p>
<Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Explore Courses
      </Button> 
    </div>
  )
}

export default HeroSection