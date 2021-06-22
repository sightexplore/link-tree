import React, { Component } from 'react';
import ProjectLink from '../Components/ProjectLink';

export default class Main extends Component {
    render() {
        return (
            <main>
                <div className="container text-center my-5">
                    <h1>EXPLORE</h1>
                    <ProjectLink category={this.props.category} />
                </div>
            </main>
        )
    }
}
