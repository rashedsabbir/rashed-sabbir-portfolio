import React from 'react';
import Header from '../../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';

import Projects from '../Project/Projects';


const Home = () => {
    return (
        <div>
            
            <Header></Header>
            <Banner></Banner>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;