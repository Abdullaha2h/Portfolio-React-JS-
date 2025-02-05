import React from 'react';
import '../styles.css';

const Contact = () => {
  return (
    <main>
      <div className="sun"></div>
      <div className="content contact">
        <h1>Let's work together...</h1>
        <hr className="line" />
        <p>
          Feel free to Contact me by submitting the form below and I will get back to you as soon as possible.
        </p>
      </div>

      <div className="form">
        <form action="#" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required placeholder="Enter Your Name" />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required placeholder="Enter Your Email" />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="2" required placeholder="Enter Your Message"></textarea>
          
          <div className="submit-button">
            <button type="submit"><i className="fas fa-arrow-circle-right"></i></button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Contact;