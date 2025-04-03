import React from 'react'
import './Hero.css'
import AnchorLink from "react-anchor-link-smooth-scroll";


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <h2><span>I'm Varun Krishna C,</span> Fullstack learner based in TN,India.</h2>
        <p>I am a Full Stack Development Enthusiast from Karur, TN </p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>

      
    </div>
  )
}

export default Hero
