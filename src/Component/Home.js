import React from 'react';
import About from './About';
import Blog from './Blog';
import Footer from './Footer';
import Nav from './Nav';

const Home = () => {
    return (
        <div>
           <Nav />
           <Blog/>
           <About/>
           <Footer/>
            
        </div>
    );
};

export default Home;