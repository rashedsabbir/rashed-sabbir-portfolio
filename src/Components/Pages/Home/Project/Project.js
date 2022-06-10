import React from 'react';


const Project = ({project}) => {
    return (
        <div class="card bg-teal-500 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={project.img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title text-2xl text-white">{project.name}</h2>
    <p class=" text-white">{project.description}</p>
    
    <a href="/" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Details</a>
    
  </div>
</div>

            
    );
};

export default Project;