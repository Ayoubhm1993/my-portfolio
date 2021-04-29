import React from 'react';
import myResume from '../../assets/me/resume.pdf'
import('./index.scss');
const Nav = (props) => {
    
    return(
        <header >
            <h2>
                
                    Ayoub Hammouch
                
            </h2>
            <nav style={{ fontFamily: 'QuickSand' }}>
                <ul className='flex-row px-1 nav-list'>
                    <li className='nav-elements'>
                        <a data-testid="about" href="#about" className='test' onClick={() => props.setContactSelected(false)}>
                            About Me
                        </a>
                    </li>
                    <li className='nav-elements'>
                        <a data-testid="work" href="#work"  className='test'  onClick={() => props.setContactSelected(false)}>
                            Work
                        </a>
                    </li>
                    <li className={`nav-elements ${props.contactSelected && 'navActive'}`}   onClick={() => props.setContactSelected(true)}>
                            Contact
                    </li>
                    <li className="nav-elements"  onClick={() => props.setContactSelected(false)}>
                          <a href={myResume} className='test' download>Resume</a> 
                    </li>
                </ul>
            </nav>
            
        </header>
    )
}
export default Nav ;