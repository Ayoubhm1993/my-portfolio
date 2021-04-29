import React from "react";
import myPic from "../../assets/me/me.JPG";
import "./index.scss"
import icon1 from "../../assets/icons/1.PNG";
import linkedin from '../../assets/icons/linkedin.png';
import github from '../../assets/icons/github.png';
import message from '../../assets/icons/message.png';
import location from '../../assets/icons/location.png';

const About = () => {
    return(
        <section className="about" id="about">
            <h1 id="#about">Who Am I ?</h1>
            <div className="about-container">
            <div className='about-card'>
            <img src={myPic} className="image-me"  alt="cover" />
            <div className='card-title'>
                <h2 >Ayoub Hammouch</h2>
                </div>
                <div className='contact-info'>
                <img src={location} className='icons-contact'></img><span className='contacts'>Austin, Texas</span>
                </div>
                <div className='contact-info'>
                <img src={message} className='icons-contact'></img><span className='contacts'>ayoubhm1993@gmail.com</span>
                </div>
            
            <div className='links-section'>
            <a href='https://www.linkedin.com/in/ayoub-hammouch-aa9a701b6/' target='_blank'><img src={linkedin} className='icons'></img></a>
            <a href='https://github.com/Ayoubhm1993/' target='_blank'><img src={github} className='icons'></img></a>
            </div>
            </div>
            <div className='text'>
            <p >
              Writing about yourself is a bit awkward, the hardest part is figuring out how to start - but I'll give it shot. 
              
              I'm Ayoub Hammouch, I am originally from Morocco , I reside in the heart of Austin , Tx.

              Professionally, my career in coding is only beginning but I am incredibly excited about this field. 
             My primary goal is to continue learning all that . I can about coding, as this field is so vast and has no shortages of new things to learn .
              
             However,  I'm leaving my options open moving forward from this class because there are so many avenues left to explore.
  
           </p>
           </div>   
  
    
      <div className="skills">
          <h3>Skills</h3>
       <div className='skills-icons'>
           <img src={icon1} alt='icons'></img>
           
       </div>
      </div>
 
      </div>
        </section>
    )
}
export default About;