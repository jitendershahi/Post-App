import React from 'react';

const HOC = (importComponent) => {
    var colors = ['red','green','orange','yellow','blue']
    let randomColor = colors[Math.floor(Math.random() * 5)]
    return (
        <div className={randomColor}>
            <importComponent />
        </div>
    );
};

export default HOC;