import React,{useState} from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Work from "./components/Work";
import Home from "./components/Home";
import ContactForm from './components/Contact';
import Footer from './components/Footer'
function App() {
  const [contactSelected, setContactSelected] = useState(false);
const projects=[
  {
  id: '1',
  title:'Oh Snap',
  description:"React",
  github:'https://github.com/Ayoubhm1993/photo-port',
  link: "https://ayoubhm1993.github.io/photo-port/"
  },
  {
    id:'2',
    title: 'ZooKeepr',
    description:"Express.js" ,
    github:'https://github.com/Ayoubhm1993/Zookeepr',
    link:""
  },
  {
    id:'3',
    title: 'Collectors haven',
    description:"MERN Stack Application" ,
    github:'https://github.com/Ayoubhm1993/collectors-haven',
    link:"https://aqueous-taiga-86315.herokuapp.com/"
  },
  {
    id:'4',
    title: 'Diet Delivery',
    description:"Html & Css" ,
    github:'https://github.com/Ayoubhm1993/diet-delivery',
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
  },
  {
    id:'7',
    title: 'Run-Buddy',
    description:"Run Buddy! Application that's Offers fitness training Services" ,
    github:'https://github.com/Ayoubhm1993/Run-Buddy',
    link:"https://ayoubhm1993.github.io/Run-Buddy"
  }
];
  return (
    <div >
      <Nav  contactSelected={contactSelected} setContactSelected={setContactSelected}/>
      <main>
      {!contactSelected ? (
        <>
      <Home />
      <About />
      <Work projects={projects} />
      </>
      ):(
        <ContactForm />
      )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
