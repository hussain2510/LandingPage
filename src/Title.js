import React from 'react';
import './Title.css';
import mobilelogo from './mobile-logo.png';
import mobileframe from './iPhoneX.png';
function Title(){
    return(
        <>
        <section id="title">
        <section id="title-left">
        <section id="title-heading">
        Seemless connection between 
every school member!!
        </section>
        <section id="title-details">
        Yogshem is a school management system helping you to save time by enabling transparency between every school member all from a single app.
        </section>
        <sections id="title-buttons">
        <button id="button-start-trial" type="button" class="btn btn-primary btn-lg">Start free trial</button>
        <button id="button-get-product-demo" type="button" class="btn btn-outline-primary btn-lg"><i class="fas fa-play"></i>get product demo</button>

        </sections>
        </section>
        <img src={mobileframe} className="mobileframe"/>;
        {/* <img src={mobilelogo} className="mobilelogo"/>; */}
        <div className="mobile-middle-frame"></div>
        </section>
        </>
    )
}
export default Title;
