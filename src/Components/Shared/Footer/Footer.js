import React from 'react';
import fb from '../../../images/logo/facebook.png'
import insta from '../../../images/logo/instagram.png'
import linkedin from '../../../images/logo/linkedin.png'
import git from '../../../images/logo/github.png'

const Footer = () => {
    return (
        
        <footer class="footer footer-center p-10 bg-teal-500 text-white rounded">
            
            
              
  <div class="grid grid-flow-col gap-4">
    <a href='/about' class="link link-hover">About</a> 
    <a href='/projects' class="link link-hover">Projects</a> 
    <a href='/contact' class="link link-hover">Contact</a> 
    <a href='/blogs' class="link link-hover">Blogs</a>
  </div> 
  
  <div className='flex flex-row-1 justify-center'>
        <a href="https://github.com/rashedsabbir" className='px-3'><img src={git} alt="git" /></a>
      <a href="https://www.linkedin.com/in/rashedsabbir/" className='px-3'><img src={linkedin} alt="linkedin" /></a>
      <a href="https://www.instagram.com/rashed_sabbir" className='px-3'><img src={insta} alt="insta" /></a>
      <a href="https://www.facebook.com/rashedsabbir16/" className='px-3'><img src={fb} alt="fb" /></a>
      </div>
  
  <div>
    <p>Copyright © 2022 - All right reserved by Rashed Sabbir</p>
  </div>
</footer>
    );
};

export default Footer;