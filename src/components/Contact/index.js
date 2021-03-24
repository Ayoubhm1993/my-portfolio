import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import './index.css'
function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
      if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        console.log(isValid);
        if (!isValid) {
          setErrorMessage('Your email is invalid.');
        } else {
          setErrorMessage('');
        }
      }  
       else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
      setFormState({...formState, [e.target.name]: e.target.value })
      console.log('errorMessage', errorMessage);
      if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
      }
    }
    function handleSubmit(e) {
      e.preventDefault();
      console.log(formState);
    }
    
    return (
        <section className='section-contact'>
          <h5>Contact me</h5>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" onBlur={handleChange} defaultValue={name} />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input type="email" name="email" onBlur={handleChange} defaultValue={name} />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea name="message" rows="5" onBlur={handleChange} defaultValue={name} />
            </div>
            {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
           </div>
            )}
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </section>
        );
}
    
export default ContactForm;