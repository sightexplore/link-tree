import React, { Component } from 'react';
import { mediaHandler } from '../Data/Data';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer mb-0 text-light">
                <div className="container text-center mt-5 pt-5 pb-3">
                    <h5>Sight Explore</h5 >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-12 mx-auto">
                                <div className="container">
                                    <div className="row">
                                        { mediaHandler.map((x,index) => 
                                            <div key={index} className=" col-sm-3 my-3 col-6"> 
                                                <a href={x.link} title={x.alt} target="_blank" rel="noopener noreferrer"> {x.icon} </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="lead"><small>&copy; All Right Reserved 2021</small></p>
                </div>
            </div>
        )
    }
}
