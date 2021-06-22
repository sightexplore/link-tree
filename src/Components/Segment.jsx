import React, { Component } from 'react'

export default class Segment extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="text-center mt-5">
                <h1 >{this.props.match.params.path.toUpperCase()}</h1>
            </div>
        )
    }
}
