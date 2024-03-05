import React from 'react'
import '../styles/About.css'; // Import the stylesheet
import Typewriter from 'typewriter-effect';


function About() {
  return (
    <div className="about-section" >
        <div className="typewriter">
        <Typewriter
        options={{
            strings: ['printf("Hello, I am <strong><span style="color: #27ae60;">WinRout</span></strong>");', 
            'print("Hello, I am <strong><span style="color: #27ae60;">WinRout</span></strong>")',
            'System.out.println("Hello, I am <strong><span style="color: #27ae60;">WinRout</span></strong>");',
            'console.log("Hello, I am <strong><span style="color: #27ae60;">WinRout</span></strong>");',
            'echo "Hello, I am <strong><span style="color: #27ae60;">WinRout</span></strong>"'
        ],
            autoStart: true,
            loop: true,
            delay: 45,
            deleteSpeed: 20,
        }}
        />  
        </div>
          
    </div>
  )
}

export default About
