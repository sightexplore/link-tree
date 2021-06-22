import React, { Component } from 'react'
import ProjectLink from '../Components/ProjectLink';

export default class Project extends Component {
    render() {
        return (
            <main className="mt-4">
                <ProjectLink category={this.props.category} />
            </main>
        )
    }
}
