import Header from '../Header/Header';
import './Home.module.css';

function Home({ appName }) {
    return (
        <Header logoText={appName} />
    );
}

export default Home;