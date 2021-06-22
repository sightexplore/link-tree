import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light" >
                <div className="container">
                    <Link className="navbar-brand" to="/">Sight Explore</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#linkItup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="linkItup">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link me-2" to="/">Home</Link>
                        <Link className="nav-link me-2" to="/project">Project</Link>
                        <Link className="nav-link me-2" to="/about">About</Link>
                        <Link className="nav-link me-2" to="/support">Support</Link>
                        <Link className="nav-link me-2" to="/contact">Contact</Link>
                    </div>
                    </div>
                </div>
            </nav>
        )
    }
}
