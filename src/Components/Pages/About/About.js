import React from 'react';
import about from '../../../images/about/about-pic.jpg'
import fb from '../../../images/logo/facebook.png'
import insta from '../../../images/logo/instagram.png'
import linkedin from '../../../images/logo/linkedin.png'
import git from '../../../images/logo/github.png'

const About = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-beige">
  <div class="hero-content flex-col lg:flex-row">
    <img src={about} className='max-w-3/4 lg:max-w-sm rounded-lg shadow-2xl}' />
    <div>
      <h1 class="text-5xl font-bold text-teal-500">Hello There!</h1>
      <p class="py-6 text-black">I am a full-stack web developer with knowledge of Reactjs, CRUD, Tailwind CSS, Bootstrap, Firebase Authentication, MongoDB, Expressjs, HTML, CSS, and JavaScript. I have recently graduated Bachelor's degree in Computer Science and Engineering at Bangabandhu Sheikh Mujibur Rahman Science and Technology University, Gopalganj, Bangladesh.</p>
      <div className='flex flex-row-1 justify-center'>
        <a href="https://github.com/rashedsabbir" className='px-3'><img src={git} alt="git" /></a>
      <a href="https://www.linkedin.com/in/rashedsabbir/" className='px-3'><img src={linkedin} alt="linkedin" /></a>
      <a href="https://www.instagram.com/rashed_sabbir" className='px-3'><img src={insta} alt="insta" /></a>
      <a href="https://www.facebook.com/rashedsabbir16/" className='px-3'><img src={fb} alt="fb" /></a>
      </div>
      <div><br />
      <ul class="steps steps-vertical lg:steps-horizontal">
  <li class="step step-primary text-primary">B.Sc. Engineering in CSE</li>
  <li class="step step-primary text-primary">Full Stack Developer</li>
  <li class="step text-black">Intern</li>
  <li class="step text-black">Permanent Job</li>
</ul>
      </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default About;