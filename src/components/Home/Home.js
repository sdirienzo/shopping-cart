import React from 'react';
import About from '../About/About';
import Featured from '../Featured/Featured';
import Jumbotron from '../Jumbotron/Jumbotron';
import Popular from '../Popular/Popular';
import Subscribe from '../Subscribe/Subscribe';

function Home() {
    return (
        <main>
            <Jumbotron />
            <About />
            <Featured />
            <Popular />
            <Subscribe />
        </main>
    );
}

export default Home;