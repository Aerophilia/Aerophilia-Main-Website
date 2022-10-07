import React from 'react'
import './Attraction.css'
import aeromodelling from './assets/aeromodelling.jpg'
import autoExpo from './assets/autoexpo.png'
import djNight from './assets/djnight.jpeg'

export default function attraction() {
  return (
    <div className='attraction_outer_container'>
        <h1 className='subtitle slider_h1'>Attraction <div className='bottom_line'></div>
        </h1>

        <div className='card_container'>
            <div className='card'>
                <h3>Air Show</h3>
                <img src={aeromodelling} alt="Aeromodelling" />
                <h3>NOV 12 | 10:00 AM</h3>
            </div>
            <div className='card'>
                <h3>Auto Expo</h3>
                <img src={autoExpo} alt="Auto Expo" />
                <h3>NOV 12 | 10:00 AM</h3>
            </div>
            <div className='card'>
                <h3>DJ Night</h3>
                <img src={djNight} alt="DJ Night" />
                <h3>NOV 12 | 10:00 AM</h3>
            </div>
            <div className='card special_card1'>
                <h3>DJ Night</h3>
                <img src={djNight} alt="DJ Night" />
                <h3>NOV 12 | 10:00 AM</h3>
            </div>
            <div className='card special_card2'>
                <h3>DJ Night</h3>
                <img src={djNight} alt="DJ Night" />
                <h3>NOV 12 | 10:00 AM</h3>
            </div>
        </div>
    </div>
  )
}
