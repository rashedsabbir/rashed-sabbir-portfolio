import React from 'react';
import Header from '../../../Shared/Header/Header';
import Banner from '../Banner/Banner';

import Projects from '../Project/Projects';


const Home = () => {
    return (
        <div>
            
            <Header></Header>
            <Banner></Banner>
            <Projects></Projects>
        </div>
    );
};

export default Home;