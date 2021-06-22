import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Intro extends Component {
    render() {
        return (
            <div className="container mb-5">
                <div className="row">

                    {/* Image */}
                    <div className="col-lg-6 pt-3"> <img src={this.props.data["img"]} alt="icon" className="img-fluid" /></div>

                    {/* Title - - - Subtitle - - - Button  */}
                    <div className="col-lg-6 d-flex align-items-center">
                        <div className="wrap mx-auto">

                            {/* Title & Subtitle */}
                            <h1 style={{color: "#9394B3", fontFamily: "Helvetica"}}> {this.props.data["title"]} </h1>
                            <h3 className="lead mb-3" style={{color: "#9394B3"}}> {this.props.data["sub-title"]} </h3>

                            {/* Button Display  */}
                            {this.props.data["displayButton"]?
                            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                <Link type="button" to="/project" className="btn btn-lg" style={{color: "#ddd", backgroundColor:"#9394B3"}}> Project </Link>
                                <Link type="button" to="/contact" className="btn btn-lg" style={{color: "#ddd", backgroundColor:"#312454"}}> Contact </Link>
                            </div>: ""}

                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
