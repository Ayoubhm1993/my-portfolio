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
    id:'1',
    title: 'Collectors haven',
    description:"MERN Stack Application" ,
    github:'https://github.com/Ayoubhm1993/collectors-haven',
    link:"https://aqueous-taiga-86315.herokuapp.com/"
  },
  {
    id:'2',
    title: 'Book Search',
    description:"Mern Stack Application" ,
    github:'https://github.com/Ayoubhm1993/book-search-engine',
    link:"https://booksearchengine21.herokuapp.com/"
  },
  {
    id:'3',
    title: 'Deep thoughts',
    description:"Mern Stack Application" ,
    github:'https://github.com/Ayoubhm1993/deep-thoughts',
    link:"https://lit-beach-94010.herokuapp.com/"
  },
  {
  id: '4',
  title:'Oh Snap',
  description:"React",
  github:'https://github.com/Ayoubhm1993/photo-port',
  link: "https://ayoubhm1993.github.io/photo-port/"
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
    description:"Html , Css , JavaScript" ,
    github:'https://github.com/Ayoubhm1993/Password-Generator',
    link:"https://ayoubhm1993.github.io/Password-Generator/"
  },
  {
    id:'8',
    title: 'Run-Buddy',
    description:"Html & Css" ,
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
