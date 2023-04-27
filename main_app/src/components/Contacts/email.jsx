import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const [resp, setResp] = useState('')

  const [lang] = useState(localStorage.getItem('language'))

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_me2u88e', 'template_002jngj', form.current, 'OQF4MUAEJnnn30HE4')
      .then((result) => {
          console.log(result.text)
          form.current.user_name.value = '';
          form.current.user_email.value = '';
          form.current.message.value = '';
          lang === 'Eng' ? setResp('Thanks for your message.') : setResp('Ačiū už jūsų žinutę.');
      }, (error) => {
          console.log(error.text);
      });
  };
 

    if(lang === 'ENG') {
      return (
        <form ref={form} onSubmit={sendEmail}>
          <h2>Contact Us Directly</h2>
          <label>Name</label>
          <input type="text" name="user_name" placeholder='Your name' required/>   
          <label>Email</label>
          <input type="email" name="user_email" placeholder='Your email' required/>
          <label>Message</label>
          <textarea name="message" rows="4" cols="50" placeholder='Your message . . .' required/>
          <button type="submit" value="Send" id='contact-submit' >Send</button>
          <div className='response'>{resp}</div>
        </form>
      );
    }else {
      return (
        <form ref={form} required onSubmit={sendEmail}>
          <h2>Susisiekite Su Mumis </h2>
          <label>Vardas</label>
          <input type="text" name="user_name" placeholder='Vardas' required/>   
          <label>Paštas</label>
          <input type="email" name="user_email" placeholder='Paštas' required/>
          <label>Jūsų žinutė</label>
          <textarea name="message" rows="4" cols="50" placeholder='Žinutė . . . ' required/>
          <button type="submit" value="Send" id='contact-submit'>Siųsti</button>
          <div className='response'>{resp}</div>
        </form>
      );
    }
};
