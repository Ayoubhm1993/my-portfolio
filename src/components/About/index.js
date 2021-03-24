import React from "react";
import myPic from "../../assets/me/me.JPG";
import "./index.scss"
import icon1 from "../../assets/icons/1.PNG";
import icon2 from "../../assets/icons/2.PNG";


const About = () => {
    return(
        <section className="about" id="about">
            <h1 id="#about">Who Am I ?</h1>
            <div className="about-container">
            
            <img src={myPic} className="image"  alt="cover" />
            
            <div className='text'>
            <p >
              Writing about yourself is a bit awkward, the hardest part is figuring out how to start - but I'll give it shot.  Professionally, my career in coding is only beginning but I am incredibly excited about this field. 
              My primary goal is to continue learning all that . I can about coding, as this field is so vast and has no shortages of new things to learn . However,  I'm leaving my options open moving forward from this class because there are so many avenues left to explore.
  
           </p>
           </div>   
  
    
      <div className="skills">
          <h5>skills</h5>
       <div className='skills-icons'>
           <img src={icon1} alt='icons'></img>
           <img src={icon2} alt="icons"></img>
       </div>
      </div>
 
      </div>
        </section>
    )
}
export default About;