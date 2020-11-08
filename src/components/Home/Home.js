import React from 'react';
import Header from '../Header/Header';
import HomeMain from '../HomeMain/HomeMain';
import Columns from '../Columns/Columns';
import FourSteps from '../FourSteps/FourSteps';
import AboutUs from '../AboutUs/AboutUs';
import WhoWeHelp from '../WhoWeHelp/WhoWeHelp';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import '../Home/home.scss';

function Home() {
    return (
        <>
        <div className="home-screen">
            <Header/>
            <HomeMain/>
        </div>
            <Columns/>
            <FourSteps/>
            <AboutUs/>
            <WhoWeHelp/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default Home;
