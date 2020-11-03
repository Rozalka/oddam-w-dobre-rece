import React from 'react';
import Header from './Header';
import HomeMain from './HomeMain';
import Columns from './Columns';
import FourSteps from './FourSteps';
import AboutUs from './AboutUs';
import WhoWeHelp from './WhoWeHelp';
import Contact from './Contact';
import Footer from './Footer';

function Home() {
    return (
        <div>
            <Header></Header>
            <HomeMain></HomeMain>
            <Columns></Columns>
            <FourSteps></FourSteps>
            <AboutUs></AboutUs>
            <WhoWeHelp></WhoWeHelp>
            <Contact></Contact>
            <Footer></Footer>
               <h1>Hello home!</h1>
               <div>
                    <h2>Fundations</h2>
                    <h2>Local</h2>
                    <h2>Organizations</h2>
               </div>   
        </div>
    )
}

export default Home;
