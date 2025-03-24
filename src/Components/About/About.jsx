import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div className='about'>
    <div className="about-title">
        <h2>About me</h2>
        <img src={theme_pattern} alt="" />
    </div>
    <div className="about-sections">
        <div className="about-right">
            <div className="about-para">
                <p>I am a Full Stack Learner, passionate about building seamless web applications by mastering both Frontend and Backend.</p>
                <p>Continuously exploring new technologies to create efficient, scalable, and user-friendly solutions. 🚀</p>
            </div>
        
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>Java</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>Python</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>MySQL</p><hr style={{width:"60%"}}/></div>
            </div>
        </div>
    </div> 
    <div className='about-achievements'>
        <div className='about-achievement'>
            <h1>7</h1>
            <p>Certification Course Completed</p>
        </div>
        <div className='about-achievement'>
            <h1>7</h1>
            <p>Projects Completed</p>
        </div>
        <div className='about-achievement'>
            <h1>5</h1>
            <p>Websites Builded</p>
        </div>
    </div>
    </div>
    

  )
}

export default About
