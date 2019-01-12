import React from 'react';
import Loader from 'react-loader-spinner';

const Spinner = () => {
    return (
        <div>
            <Loader 
             type="Oval"
             color="black"
             height="100"	
             width="100"
            />
        </div>
    );
};

export default Spinner;