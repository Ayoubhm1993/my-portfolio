import React from 'react';

import('./index.scss');
const Nav = (props) => {
    
    return(
        <header >
            <h2>
                <a data-testid="link" href="/">
                    <span >Ayoub Hammouch</span>
                </a>
            </h2>
            <nav>
                <ul className='flex-row px-1'>
                    <li className='mx-2'>
                        <a data-testid="about" href="#about" onClick={() => props.setContactSelected(false)}>
                            About Me
                        </a>
                    </li>
                    <li className='mx-2'>
                        <a data-testid="work" href="#work" onClick={() => props.setContactSelected(false)}>
                            Work
                        </a>
                    </li>
                    <li className={`mx-2 ${props.contactSelected && 'navActive'}`}  onClick={() => props.setContactSelected(true)}>
                            Contact
                    </li>
                    <li className="mx-2"onClick={() => props.setContactSelected(false)}>
                            Resume
                    </li>
                </ul>
            </nav>
            
        </header>
    )
}
export default Nav ;