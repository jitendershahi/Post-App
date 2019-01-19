import React, { Component } from 'react';
import PractiseForm from '../../component/practiseForm/practiseForm';

class Practise extends Component {

    submitForm = (values) => {
        console.log(values)
    }

    render() {
        return (
            <div>
                {/* <PractiseForm onSubmit={this.submitForm} /> */}
            </div>
        );
    }
}

export default Practise;