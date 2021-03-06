// App.js
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Components
import Navbar from './Navbar';
import Intro from './Intro';
import Footer from './Footer';
import Segment from './Segment';

//Pages
import Main from '../Pages/Main';
import About from '../Pages/About';
import Project from '../Pages/Project';
import Contact from '../Pages/Contact';
import Support from '../Pages/Support';

//Data
import { links, intro } from '../Data/Data';


export default class Home extends Component {

    render() {
        //console.log(this.props);

        return (
            <>
            <Router basename="link-tree">

                {/* Navbar + Intro */}
                <div className="hero pb-5">
                    <Navbar />

                    {/* Switch-1 Intro  */}
                    <Switch>
                        <Route exact path={links["Home"]}> <Intro data={intro["Home"]}/> </Route>
                        <Route exact path={links["About"]}> <Intro data={intro["About"]}/> </Route>
                        <Route exact path={links["Project"]}> <Intro data={intro["Project"]}/> </Route>
                        <Route exact path={links["Contact"]}> <Intro data={intro["Contact"]}/> </Route>
                        <Route exact path={links["Support"]}> <Intro data={intro["Support"]}/> </Route>
                        <Route exact path={"/project/:path"}> 
                            <div className="mt-5 text-center">
                                <Link className="btn" to="/project"> <h1>PROJECTS</h1> </Link>
                            </div>
                        </Route>
                    </Switch>
                    
                </div>

                {/* Switch-2 Page  */}
                <Switch>
                    <Route exact path={links["Home"]} >
                        <Main category={this.props.category} community={this.props.community} projectCount={this.props.projectlinks.length} />
                    </Route>
                    <Route exact path={links["About"]}>
                        <About community={this.props.community} />
                    </Route>
                    <Route exact path={links["Project"]}>
                        <Project category={this.props.category} />
                    </Route>
                    <Route exact path={links["Support"]}>
                        <Support />
                    </Route>
                    <Route exact path={links["Contact"]}>
                        <Contact />
                    </Route>

                    {/* Dynamic Routing */}
                    <Route exact path={"/project/:path"} render={({match}) => 
                        <Segment category={this.props.category} data={this.props.projectlinks} match={match}  />
                    }/>
                    
                </Switch>

                {/* Footer  */}
                <Footer />

            </Router>
            </>
        )
    }
}
