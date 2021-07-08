import React, { Component } from 'react'
import Content from '../Components/Content'

export default class About extends Component {
    render() {
        return (
            <main>
                <div className="container text-center my-5">
                    <Content community={this.props.community} />
                </div>
            </main>
        )
    }
}
