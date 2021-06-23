import React, { Component } from 'react';
import { color1, color2, color3 } from '../Data/Data';
import Form from '../Components/Form';

export default class Contact extends Component {
    render() {
        return (
            <div className="container " >
                <h1 className="text-center underline pt-5 mb-4" style={{color: color2}}>CONTACT</h1> 
                <div className="container mt-5 p-3">
                    <div className="row">
                        <div className="col-md-8 col-sm-12 mx-auto" >
                            <Form />
                        </div>
                    </div>     
                </div>
            </div>
        )
    }
}
