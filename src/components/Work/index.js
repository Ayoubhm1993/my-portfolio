import React, { useState } from "react";

import './index.scss';
import photo0 from '../../assets/projects/0.JPG';
import photo1 from '../../assets/projects/1.JPG';
import photo2 from '../../assets/projects/2.jpg';
import photo4 from '../../assets/projects/4.JPG';
import photo5 from '../../assets/projects/5.jpg';
import photo3 from '../../assets/projects/3.JPG';
import Modal from '../Modal'

function Work (props){
const {projects}=props;


const photos=[photo0,photo1,photo2,photo3,photo4,photo5];
const [project]=useState([ {
  id: '1',
  title:'Oh Snap',
  description:"Oh Snap ! Application that's handle portfolio Projects and works ,with option to see seprate gallery images .",
  github:'https://github.com/Ayoubhm1993/photo-port',
  link: "https://ayoubhm1993.github.io/photo-port"
  },
  {
    id:'2',
    title: 'ZooKeepr',
    description:"Zookeepr! Application that's handle Animal Catalog, with option to select Animal base on Diet and Catalog & add and modifie and delete Each animal ." ,
    github:'https://github.com/Ayoubhm1993/Zookeepr',
    link:""
  },
  {
    id:'3',
    title: 'Run-Buddy',
    description:"Run Buddy! Application that's Offers fitness training Services" ,
    github:'https://github.com/Ayoubhm1993/Run-Buddy',
    link:"https://ayoubhm1993.github.io/Run-Buddy"
  },
  {
    id:'4',
    title: 'Diet Delivery',
    description:"Diet Delivery! Application for a meal delivery service that specializes in diets for chronic diseases, such as renal disease and diabetes." ,
    github:'https://github.com/Ayoubhm1993/meal-delivery',
    link:"https://diet-delivery.herokuapp.com/"
  },
  {
    id:'5',
    title: 'Work Day Scheduler',
    description:"Work Day Scheduler! Application that offers Daily schedule during buisness hours, with option to save your event in local storage ." ,
    github:'https://github.com/Ayoubhm1993/Work-Day-Scheduler',
    link:"https://ayoubhm1993.github.io/Work-Day-Scheduler/"
  },
  {
    id:'6',
    title: 'Password Generator',
    description:"Password Generator! Application that's genearat password with 8 minimum and 128 maximum length , Include char/Uppercase and LowerCase ." ,
    github:'https://github.com/Ayoubhm1993/Password-Generator',
    link:"https://ayoubhm1993.github.io/Password-Generator/"
  }]);
  
  
  const [isModalOpen, setIsModalOpen] = useState(false);
const [currentProject, setCurentProject]=useState();
const toggleModal = (image, i) => {
    setCurentProject({...image,index:i})
    setIsModalOpen(!isModalOpen);
   
  }




    return(
        <section className="work-section" id="work">
          <h3> Work </h3>
          {isModalOpen && <Modal  onClick={toggleModal} project={project} photos={photos} />}
          {projects.map((project,i)=>(
         <div className='card-container'> 
            <div className='card-img'>
                <img src={photos[i]} alt={project.title} onClick={toggleModal} className='img' key={project.id} />
               <div className='img-overlay'>
                
                <button className='btn' ><a href={project.github}>Github</a></button>
                <button className='btn'><a href={project.link}>Link</a></button>
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


   
  