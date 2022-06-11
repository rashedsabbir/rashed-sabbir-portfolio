import React from 'react';
import portfolio from '../../../images/logo/portfolio.png'
import resume from '../../../resume/rashedsabbir_resume.pdf'


const Header = () => {
    
      

    return (
        

<nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <img className='px-3' src={portfolio} alt="" />
    <span class="font-semibold text-xl tracking-tight">Rashed's Portfolio</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-md lg:flex-grow">
      <a href="/" class=" block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Home
      </a>
      <a href="/about" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        About
      </a>
      <a href="/projects" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Projects
      </a>
      <a href="/contact" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
      Contact
      </a>
      <a href="/blogs" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Blogs
      </a>
    </div>
    <div>
      <a href={resume} class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" download="resume.pdf">Download Resume</a>
    </div>
  </div>
</nav>


    );
};

export default Header;