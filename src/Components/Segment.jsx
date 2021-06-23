// Components/Home.js
import React, { Component } from 'react'
import SadImage from '../Assests/Images/Sad.png'
import { Link } from "react-router-dom";
import { color3, color2 } from "../Data/Data";
import ProjectView from './ProjectView';

export default class Segment extends Component {

    constructor(props){
        super(props);
        this.extractProject = this.extractProject.bind(this);
    }

    extractProject = (name) => {
        let categoryId = this.props.category.filter((x) => x.path === name)[0].id;
        let filterData = this.props.data.filter((x) => x.category === categoryId);
        //console.log(filterData);
        return filterData;
    }

    render() {
        
        let projectName = this.props.match.params.path;
        let data = this.extractProject(projectName);

        return (
            <div className="text-center mt-5">
                <h1> {projectName.toUpperCase()} </h1>
                { (data.length !== 0) ? 
                    <div className="container ">
                        <div className="row">
                            { data.map((x, index) => <ProjectView key={index} data={x} priColor={color2} secColor={color3} /> ) }
                        </div>
                        <div className="container mt-5 pt-5">
                            <h1 className="display-5">Any More Suggestion ?</h1>
                            <p className="lead"> Feel free to let us know !</p>
                            <Link to="/contact" className="btn btn-lg" style={{backgroundColor: color2, color: "#ccc" }}> Contact Us </Link>
                        </div>
                    </div>


                 : 
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <img className="img-fluid" alt="not there" src={SadImage}></img>
                            </div>
                            <div className="col-lg-6 mb-5 not-added">
                                <div className="container ">
                                    <h1 className="display-4"> No Project Added</h1>
                                    <p className="lead"> Waiting for your suggestion !</p>
                                    <Link to="/contact" className="btn btn-lg" style={{backgroundColor: color2, color: "#ccc" }}> Contact Us </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                }


            </div>
        )
    }
}
