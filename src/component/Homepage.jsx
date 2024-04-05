import React from 'react'
import Cards from './Cards'
import Footer from './Footer'


export default function Homepage() {
  return (
    <div>
       <div className='heading'>
            <h1 className='heading-cont'>Memoirs from Teacher's Day 2023</h1>
       </div>
        <div className='row'>
            <Cards name="Photo" destination="/photos"/>
            <Cards name="Video" destination="/videos"/>
        </div>
        <div class="container-fluidx bg-2 text-center">
          <h3 class="margin">Disclaimer</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          
        </div>
        <Footer/>
    </div>
  )
}
