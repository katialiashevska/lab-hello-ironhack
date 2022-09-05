import React from 'react';

const Section1 = () => {
    return (
        <div className="section1">
            <div className="nav-bar">
                <img src="./images/ironhack-logo.svg" alt="ironhack-logo" className="img-nav" />
                <img src="./images/menu-top.svg" alt="menu" clasName="img-menu" /> 
            </div>
            <div className="main-div">
                <h1>Say hello to ReactJS</h1>
                <h3>You will learn how to use the most popular frontend library, and become a super Ninja developer.</h3>
                <button>Awesome!</button>
            </div>
        </div>
    )
};

export default Section1;