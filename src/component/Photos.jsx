import React from 'react'
import Footer from './Footer'
import one from './one.JPG'
import two from './two.JPG'
import three from './three.JPG'
import four from './four.JPG'
import five from './five.JPG'
import six from './six.JPG'
import seven from './seven.JPG'
import eight from './eight.JPG'


export default function Photos() {
  return (
    <>
    <div className='rown'>
        <div className="nnn">
            
                <img src={one} className='fuckme'/>
            
        </div>

        <div className="nnn">
            
                <img src={four} className='fuckme'/>
            
        </div>
        <div className="nnn">
            
                <img src={five} className='fuckme' />
            
        </div>
        <div className="nnn">
            
                <img src={three} className='fuckme' />
            
        </div>
        <div className="nnn">
            
                <img src={two} className='fuckme' />
            
        </div>
        <div className="nnn">
            
                <img src={six} className='fuckme' />
            
        </div>

        <div className="nnn">
            
                <img src={seven} className='fuckme' />
            
        </div>
        <div className="nnn">
            
                <img src={eight} className='fuckme' />
            
        </div>
    </div>
        <Footer/>
        </>
  )
}
