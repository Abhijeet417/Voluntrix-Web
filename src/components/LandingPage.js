import React from 'react'
import { Header } from './Header';
import { Events } from './Events';
import { Footer } from './Footer';
import { About } from './About';
import { Download } from './Download';
import { Stories } from './Stories';
import { Contact } from './Contact';

export const LandingPage = () => {
  return (
    <div style={{ overflowX: 'hidden'}}>

        <Header/>
        <About id="about"/>
        
        <Events id="features"/>
        <hr className='divider' />
        <Stories/>
        {/* <hr class="featurette-divider" style={{margin : "0",height: "2px", borderRadius: "1px",}}></hr>
        <Download/> */}
        <hr className='divider' />
            <Contact id="c"/>
            <hr className='divider' />
        <Footer/>
    </div>
  )
}
