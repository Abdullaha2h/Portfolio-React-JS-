import React from 'react';
import '../styles.css';
import MernStackDiagram from './MernStackDiagram';

const About = () => {
  return (
    <main>
      <div className="sun"></div>
      <div className="content">
        <h1>ABOUT ME</h1>
        <hr className="line" />
        <p>
          Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
        </p>
      </div>

      <div className="about_me">
        <div className="detail">
          <p>
            I'm a <strong>MERN Stack Developer</strong> specializing in building and managing full-stack web applications using <strong>React.js</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong>. I focus on creating seamless, scalable, and user-friendly applications that drive the success of the overall product. Check out some of my work in the <strong>Projects</strong> section to see how I’ve brought ideas to life.
          </p>
          <p>
            I’m passionate about sharing the knowledge I’ve gained over the years in <strong>Web Development</strong>, particularly in the <strong>MERN stack</strong>, to help others in the developer community. Feel free to <strong>Connect</strong> or <strong>Follow</strong> me on <a href="https://www.linkedin.com/in/muhammad-abdullah-08879822a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>, where I regularly post useful content about <strong>Web Development</strong>, <strong>React</strong>, <strong>Node.js</strong>, and <strong>Programming</strong> in general.
          </p>
          <p>
            I’m always open to <strong>job opportunities</strong> where I can contribute, learn, and grow. If you have a role that aligns with my skills and experience in <strong>MERN stack development</strong>, I’d love to hear from you. Don’t hesitate to reach out!
          </p>
        </div>

        <div className="bg-white-900 scale-80 flex justify-center items-center">
      <MernStackDiagram />
    </div>

        {/* <div className="skills">
          <img src="/images/skills.png" alt="skills tree" />
        </div> */}
      </div>
    </main>
  );
};

export default About;