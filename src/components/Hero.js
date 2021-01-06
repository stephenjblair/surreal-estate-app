import React from 'react';
import Search from '../components/Search';
import bg from '../images/bg5.jpg';
import '../styles/Hero.css';
 
const Hero = () => {
    return (
        <>
        <div className="wrapper">
            <div>
                <Search />
            </div>
         
            <div> 
                <img className="img-container" src={bg} alt=""/>
                <div className="hero-text"></div>
            </div>
        </div>

        </>
    )
}

export default Hero;
