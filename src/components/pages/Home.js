import '../../App.css';
// import { BrowserRouter as Router} from 'react-router-dom';
// import { Route, Routes } from 'react-router-dom';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer'

function Home(){
    return(
        <>
            <HeroSection />
            <Cards />
            <Footer />
        </>
    )
} 

export default Home;