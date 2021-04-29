import React from 'react';
import homePic from '../../assets/cover/cover.jpg';
import './index.scss';
const Home =()=>{
    return(
        <div className='home'>
                <img src={homePic} alt='travel' className="image-cover"></img>
               <p className="text-full-fix">I'm a<br/> </p>
                <p className="text-full">Full Stack Developer</p>  
            
        </div>
    )
} 

export default Home;