import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import Jumbotron from '../Jumbotron/Jumbotron';
import './Home.module.css';

function Home() {
    return (
        <>
            <Header />
            <Jumbotron />
            <About />
        </>
    );
}

export default Home;