import React from 'react'
import Hero from './hero/Hero'
import About from './about/About'
import Slider from './slider/Slider'
import Attraction from './attraction/Attraction'
import Brochure from './brochure/Brochure'

export default function Home() {
  return (
    <div className='home_div'>
      <Hero/>
      <About/>
      <div>
        <h1 className='subtitle slider_h1'>GALLERY <div className='bottom_line'></div>
        </h1>
        <p className='slider_p'>Glimpses of Aerophilia 2019</p>
        <Slider/>
      </div>  
      <Attraction/>
      <Brochure/>
    </div>
  )
}
