import React, { useState } from "react";

import './index.scss';
import photo0 from '../../assets/projects/0.JPG';
import photo1 from '../../assets/projects/1.jpg';
import photo6 from '../../assets/projects/6.jpg';
import photo4 from '../../assets/projects/4.JPG';
import photo5 from '../../assets/projects/5.JPG';
import photo3 from '../../assets/projects/3.JPG';
import photo2 from '../../assets/projects/2.JPG';
import photo7 from '../../assets/projects/7.jpg';
import Modal from '../Modal';
import githubIcon from '../../assets/icons/github.png';
import liveIcon from '../../assets/icons/live.png';

function Work (props){
const {projects}=props;


const photos=[photo0,photo1,photo2,photo3,photo4,photo5,photo6,photo7];
const [project]=useState([  {
  id: '1',
  title:'Oh Snap',
  description:"React",
  github:'https://github.com/Ayoubhm1993/photo-port',
  link: "https://ayoubhm1993.github.io/photo-port/"
  },
  {
    id:'2',
    title: 'Collectors haven',
    description:"MERN Stack Application" ,
    github:'https://github.com/Ayoubhm1993/collectors-haven',
    link:"https://aqueous-taiga-86315.herokuapp.com/"
  },
  {
    id:'3',
    title: 'Book Search',
    description:"Mern Stack Application" ,
    github:'https://github.com/Ayoubhm1993/book-search-engine',
    link:"https://booksearchengine21.herokuapp.com/"
  },
  {
    id:'4',
    title: 'Deep thoughts',
    description:"Mern Stack Application" ,
    github:'https://github.com/Ayoubhm1993/Zookeepr',
    link:""
  },
  {
    id:'5',
    title: 'Diet Delivery',
    description:"Js , Node.js , Express.js , MySql , Handlebars.js" ,
    github:'https://github.com/Ayoubhm1993/diet-delivery',
    link:"https://diet-delivery.herokuapp.com/"
  },
  {
    id:'6',
    title: 'Work Day Scheduler',
    description:"Html , Css , JavaScript , Bootstrap , jQuery" ,
    github:'https://github.com/Ayoubhm1993/Work-Day-Scheduler',
    link:"https://ayoubhm1993.github.io/Work-Day-Scheduler/"
  },
  {
    id:'7',
    title: 'Password Generator',
    description:"Password Generator! Application that's genearat password with 8 minimum and 128 maximum length , Include char/Uppercase and LowerCase ." ,
    github:'https://github.com/Ayoubhm1993/Password-Generator',
    link:"https://ayoubhm1993.github.io/Password-Generator/"
  },
  {
    id:'8',
    title: 'Run-Buddy',
    description:"Run Buddy! Application that's Offers fitness training Services" ,
    github:'https://github.com/Ayoubhm1993/Run-Buddy',
    link:"https://ayoubhm1993.github.io/Run-Buddy"
  }]);
  
  
  const [isModalOpen, setIsModalOpen] = useState(false);
const [currentProject, setCurentProject]=useState();
const toggleModal = (image, i) => {
    setCurentProject({...image,index:i})
    setIsModalOpen(!isModalOpen);
   
  }




    return(
        <section className="work-section" id="work">
          <h3 className="work-title"> Work </h3>
          {isModalOpen && <Modal  onClick={toggleModal} project={project} photos={photos} />}
          {projects.map((project,i)=>(
         <div className='card-container'> 
            <div className='card-img'>
                <img src={photos[i]} alt={project.title} onClick={toggleModal} className='img' key={project.id} />
               <div className='img-overlay'>
                
                <a href={project.github} target='_blank'><img src={githubIcon} alt='github' className='btn' /></a>
                <a href={project.link} target='_blank'><img src={liveIcon} alt='linkedin' className='btn' /></a>
                </div>
                
                
            </div>
            <div className='card-title'>
                 <h1 className='title'>{project.title}</h1>
                 <p className="description">{project.description}</p>
                 
            </div>
         </div>
         ))}

         
        </section>
    )
}
export default Work;


   
  