import React from 'react';
import linkedin from '../../assets/icons/linkedin.png';
import github from '../../assets/icons/github.png';

import './index.scss';
const Footer =()=>{
return(
    <section className='footer-container'>
    <div className='linkedin'>
<a href="https://www.linkedin.com/in/ayoub-hammouch-aa9a701b6/"><img src={linkedin} alt="linkedin"/></a>
    </div>
    <div className='github'>
    <a href="https://github.com/Ayoubhm1993"><img src={github} alt="github"/></a>
    </div>
    
    <p style={{ fontFamily: 'Quicksand' }}>&copy; 2021 Ayoub Hammouch, Inc.</p>
    </section>
)
}
export default Footer;