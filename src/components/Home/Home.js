import React from 'react';
import About from '../About/About';
import Featured from '../Featured/Featured';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Jumbotron from '../Jumbotron/Jumbotron';
import Popular from '../Popular/Popular';
import './Home.module.css';

function Home() {
    return (
        <>
            <Header />
            <Jumbotron />
            <About />
            <Featured />
            <Popular />
            <Footer />
        </>
    );
}

export default Home;