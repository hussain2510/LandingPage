import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
import svg1 from './svg/header/svg1.svg';
import svg2 from './svg/header/svg2.svg';
import svg3 from './svg/header/svg3.svg';
import svg4 from './svg/header/svg4.svg';
function Header()
{
    return(
    <>
    <section id="header-top">
        <section id="header-logo">
        <img src={svg1} id="svg1" alt="logo" />
        <img src={svg2} id="svg2" alt="logo" />
        <img src={svg3} id="svg3" alt="logo" />
        <img src={svg4} id="svg4" alt="logo" />
        </section>
        <section id="header-brandName">
            <h1>yogshem</h1>
        </section>
        <section id="header-navbar">
            <a href="">About yogshem</a>
            <a href="">Features</a>
            <a href="">Testimonials</a>
            <a href="">Pricing</a>
        </section>
        <section id="header-button">
        <button id="button-start-trial" type="button" class="btn btn-primary btn-lg">Start free trial</button>
        <button id="button-signIn" type="button" class="btn btn-outline-primary btn-lg">Sign in</button>

        </section>
    </section>
    </>);
    
}
export default Header;