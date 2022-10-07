import React from 'react'
import './About.css'
import sahyadri_logo from './assets/sahyadri logo-icon.png'
import challengers_logo from './assets/challengers-logo.png'
import challengers_logo_text from './assets/challengers-logo-text.png'

export default function About() {
  return (
    <div className='about_container'>
      <h1 className='subtitle'>ABOUT <div className='bottom_line'></div>
      </h1>

      <div className='sub_container'>
        <a href="https://sahyadri.edu.in/">
          <img src={sahyadri_logo} alt="Sahyadri Logo" className='sahyadri-logo'/>
        </a>
        <p><spna class="gradient-text-background"><strong>Aerophilia</strong></spna> is a National level Techno-Cultural fest, conducted for students aspiring to be extraordinary. It’s a 3-day event spanning the weekend with an exciting competition involving <span class="gradient-text-background"><strong>Aeromodelling, Drone race, RC Bot events,</strong></span> and all things out of this world! There are also fun-filled activities and Hackathons. The motive behind organizing such an event is to spread and teach the young talented minds to explore new areas of <span class="gradient-text-background"><strong>technology</strong></span> and <span class="gradient-text-background"><strong>aeromodelling</strong></span> to foster the nation's development.</p>
        <a href="https://challengers.org.in/">
          <div className='challengers-logo-image-container'>
            <img src={challengers_logo} alt="challengers logo" className='challengers-logo' />
            <img src={challengers_logo_text} alt="challengers logo text" className='challengers-logo-text'/>
          </div>
        </a>
      </div>

      <div className='venue'>
        <p><span class="gradient-text-background">Venue</span> : Sahyadri College of Engineering & Management Managluru.</p>
        <p><span class="gradient-text-background">Schedule</span> : 11, 12 & 13 Nov 2022</p>
      </div>
    </div>
  )
}
