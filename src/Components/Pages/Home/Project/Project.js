import React from 'react';


const Project = ({project}) => {
    return (
        <div class="card lg:max-w-lg bg-teal-500 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={project.img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title text-white">{project.name}</h2>
    <p class=" text-white">{project.description}</p>
    <strong class=" text-white">Technology Used: <span className='badge badge-sm badge-secondary'>{project.tech}</span></strong>
    
  </div>
</div>

            
    );
};

export default Project;