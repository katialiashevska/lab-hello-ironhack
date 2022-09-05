import React from 'react';

const Section2 = () => {
    return (
        <div className="section2">
            <div>
                <img src="./images/icon1.png" alt="icon1" className="section2-img" />
                <h3>Declarative</h3>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div>
                <img src="./images/icon2.png" alt="icon2" className="section2-img" />
                <h3>Components</h3>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div>
                <img src="./images/icon3.png" alt="icon3" className="section2-img" />
                <h3>Single-Way</h3>
                <p>A set of immutable values are passed to the component's.</p>
            </div>
            <div>
                <img src="./images/icon4.png" alt="icon4" className="section2-img" />
                <h3>JSX</h3>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
        </div> 
    )
};

export default Section2;