import React from 'react'
import msg_icon from '../../img/msg-icon.png';
import mail_icon from '../../img/mail-icon.png';
import phone_icon from '../../img/phone-icon.png';
import location_icon from '../../img/location-icon.png';

import white_arrow from '../../img/white-arrow.png';

import './contact.css';
const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key","9db7078c-38c1-4729-b801-c086122257c5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send Us a Message <img src={msg_icon} alt="msg-icon"/> </h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li> <img src={mail_icon} alt=''/> Contact@Code.com</li>
            <li> <img src={phone_icon} alt=''/> +91 2556656789</li>
            <li> <img src={location_icon
            } alt=''/> Mumbai , India</li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder='Enter Your Name' required/>

            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder='Enter Your Mobile Number' required/>

            <label>Write Your Message Here</label>
            <textarea name="message" cols="30" rows="6" placeholder='Write Your Message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt=''/></button>
        </form>

        <span> {result} </span>
      </div>
    </div>
  )
}

export default Contact
