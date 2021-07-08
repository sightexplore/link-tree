import React, { Component } from 'react';
import { content } from '../Data/Data';
import { follower } from '../Data/Data';

export default class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            fireContent: "",
            fireFollower: "",
        }
    }

    componentDidMount(){
        this.setState({
            fireContent: this.props.community[0],
            fireFollower: this.props.community[1],
        })
    }

    render() {
        return (
            <>

                <div className="container text-center my-5">
                    <div className="row">
                        <div className="col bg-light">
                            <p className="display-4">Contribution</p>
                            <hr />
                            <div className="container rounded">
                                <div className="row">
                                    {content.map((element, index) => {
                                        return <div key={index} className="col-md-6 col-lg-3">
                                            <div className="box">
                                                <h1>{
                                                (this.state.fireContent[element.name.toLowerCase()]===undefined)?
                                                "0": this.state.fireContent[element.name.toLowerCase()]
                                                }</h1>
                                                <p className="my-0">{element.subName}</p>
                                                <p className="display-5">{element.name}</p>
                                            </div>
                                        </div>
                                    })}                                                                                                         
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container text-center my-5">
                    <div className="row">
                        <div className="col bg-light">
                            <p className="display-4">Community</p>
                            <hr />
                            <div className="container">
                                <div className="row rounded">
                                    {follower.map((element, index) => {
                                        return <div key={index} className="col-md-6 col-lg-3">
                                            <div className="box">
                                                <h1>{
                                                (this.state.fireFollower[element.name.toLowerCase()]===undefined)?
                                                "0": this.state.fireFollower[element.name.toLowerCase()]
                                                }</h1>
                                                <p className="my-0">{element.subName}</p>
                                                <p className="display-5">{element.name}</p>
                                            </div>
                                        </div>
                                    })}                                                                                                         
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
