import React from 'react';
import linkedin from '../../assets/icons/linkedin.png';
import github from '../../assets/icons/github.png';
import mail from '../../assets/icons/mail.png';
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
    <div className="mail">
        <a href='Contact'><img src={mail} alt="mail" /></a>
    </div>
    </section>
)
}
export default Footer;