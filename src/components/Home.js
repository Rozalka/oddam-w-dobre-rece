import React from 'react';
import HomeHeader from './HomeHeader';
import HomeMain from './HomeMain';
import Home3Columns from './Home3Columns';
import Home4Steps from './Home4Steps';
import HomeAboutUs from './HomeAboutUs';
import HomeWhoWeHelp from './HomeWhoWeHelp';
import Contact from './Contact';
import Footer from './Footer';

function Home() {
    return (
        <div>
            <HomeHeader></HomeHeader>
            <HomeMain></HomeMain>
            <Home3Columns></Home3Columns>
            <Home4Steps></Home4Steps>
            <HomeAboutUs></HomeAboutUs>
            <HomeWhoWeHelp></HomeWhoWeHelp>
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
