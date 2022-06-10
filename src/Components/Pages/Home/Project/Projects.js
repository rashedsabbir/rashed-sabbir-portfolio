import React from 'react';
import Project from './Project';
import chunk from '../../../../images/White Sport Car Photo Collage_2.jpg'
import sareealoy from '../../../../images/White Sport Car Photo Collage_3.jpg'
import sherpa from '../../../../images/White Sport Car Photo Collage_4.jpg'
import craft from '../../../../images/White Sport Car Photo Collage_5.jpg'
import review from '../../../../images/White Sport Car Photo Collage_6.jpg'

const Projects = () => {
    const projects = [
        {
            _id: 1,
            name: 'Chunk Manufacturer',
            description: 'It is a car parts manufacturer website where users can order and also pay for it.',
            img: chunk,
            
        },
        {
            _id: 2,
            name: 'SareeAloy',
            description: 'This website is based on saree warehouse inventory management.',
            img: sareealoy,
            
        },
        {
            _id: 3,
            name: 'Sherpa',
            description: 'It is a tour guide website for an independent service provider.',
            img: sherpa,
            
        },
        {
            _id: 4,
            name: 'Product Review',
            description: 'It is a product review website for a store where you can see all the reviews.',
            img: review,
            
        },
        {
            _id: 5,
            name: 'Crafts Store',
            description: 'It is a crafts store website where user can add products to the cart.',
            img: craft,
            
        },
        
    ];
    return (
        <div className="my-10">
            <div className='text-center'>
            <p className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary uppercase'>
              Projects
            </p>
            <h1 className='text-4xl py-4 text-yellow-500'>Top projects</h1>
          </div>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    projects.map(project =><Project
                        key={project._id}
                        project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;