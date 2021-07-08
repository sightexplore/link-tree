import React, { Component } from 'react';
import ProjectLink from '../Components/ProjectLink';
import Content from '../Components/Content';

export default class Main extends Component {s
    render() {
        return (
            <main>
                <div className="container text-center my-5">
                    <h1>EXPLORE</h1>
                    <ProjectLink category={this.props.category} />
                </div>
                <Content community={this.props.community} />
            </main>
        )
    }
}
