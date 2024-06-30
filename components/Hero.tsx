import React from 'react'
import { Spotlight } from './ui/Spotlights'

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
        <div>
          <Spotlight className='-top40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white"/>
          <Spotlight className='-top40 -left-10 md:-left-full h-[80vh] w-[50vw]md:-top-20 h-screen' fill="purple"  />
          <Spotlight className='left-80 top-28 h-[80vh] w-[50vw]' fill="blue"/>   
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.3] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      
    </div>

    </div>
  )
}

export default Hero