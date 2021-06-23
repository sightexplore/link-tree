import React, { Component } from 'react'

export default class ProjectView extends Component {
    render() {
        return (
            <div className="col-md-4  project-view ">

                <div className="text-start rounded mt-4 p-2 px-4" 
                    style={{color: this.props.priColor, backgroundColor: this.props.secColor }}
                >
                    <h3> {this.props.data.name} </h3>
                    <p className="mb-2"> {this.props.data.about } </p>

                    <a style={{backgroundColor: this.props.priColor, color: this.props.secColor }} 
                        className="btn btn-sm" href={this.props.data.link} target="_blank" rel="noopener noreferrer"> 
                    Open
                    </a>
                
                </div>
            </div>
        )
    }
}
