import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class ProjectLink extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.category.map((x,index) =>  
                        <div className="col-4" key={index}>
                            <div className="content text-center p-1 my-2" >
                                <Link className="btn" to={ "project/" + x.path } >
                                    <div className="p-3"> { x["icon"] } </div>
                                    <h5 style={{color: "#312454"}}> { x["name"] } </h5>   
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
