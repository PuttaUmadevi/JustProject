import React from 'react';
// import './Contact.css';
import '../Allstyles/styles.css'

const ContactUs = () => {
    return (
        <div className="contact-container">
            <div className="contact-info">
                <h2>Find Us</h2>
                <p><br />Puyallup, WA 98371</p>
            </div>
            <div className="contact-form">
                <h2>Contact Us</h2>
                <form>
                    <label htmlFor="name">Name*</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email*</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="subject">Subject*</label>
                    <input type="text" id="subject" name="subject" required />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="4" />

                    <button type="submit">SEND</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
