// Pages/Contact.jsx
import React, { Component } from 'react';
import { color2, color3 } from '../Data/Data';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                email: "",
                message: "",
                },
            name: "",
            isSubmitting: false,
            isError: false,
            displayAlert: false,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAlert = this.handleAlert.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    
    handleInputChange = (e) =>
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value }
    });

    handleNameChange = (e) => this.setState( { name: e.target.value } );

    handleAlert = (e) => this.setState( { displayAlert: !e.target.value } );

    submitForm = async e => {

        e.preventDefault();
        this.setState({ isSubmitting: true });

        var msg = this.state.values;
        msg.message = `From : ${this.state.name}. Message : ${msg.message}`;
        var dataX = JSON.stringify(msg);

        fetch(e.target.action, {
            method: "POST",
            body: dataX,
            headers: {
                "Content-Type": "application/json"
            }
        })

        .then(res => {
            this.setState({ isSubmitting: false });
            return res.json();
        })

        .then(data => {
            console.log(data);
            !data.hasOwnProperty("error") ? this.setState({ message: data.success }) : this.setState({ message: data.error, isError: true });
        })

        .then(() => {
            this.setState({
                isError: false,
                message: "",
                values: { email: "", message: "" },
                name: "",
                displayAlert: true,
            });
        })

    };


    render() {
        var fname = this.state.name.split(' ')[0];
        return (
            <>
                { ( this.state.displayAlert) ?   <div className="alert alert-info alert-dismissible fade show" role="alert">
                        Message Send <strong> successfully </strong> {this.state.name}.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={this.handleAlert}></button>
                </div> : ""
                }                         
                <div className = "row">
                    <div className="form-warp">
                    <form action="https://formspree.io/f/mbjqynzq" method="POST" onSubmit={this.submitForm} >
                        <h2 className = "mt-3 " style={{color: color2}} >GET IN TOUCH</h2>
                        <div className = "col-lg-12">
                            <div className = "form-group">
                                <input value={this.state.name} name="name" type="text" className = "form-control mt-2" placeholder="Enter Name" required onChange={this.handleNameChange}/>
                            </div>
                        </div>
                        <div className = "col-lg-12">
                            <div className = "form-group mb-2">
                                <input value={this.state.values.email} name="email" type="email" className = "form-control mt-2" placeholder="Enter Email ID" required onChange={this.handleInputChange} />
                            </div>
                        </div>
                        <div className = "col-12">
                            <div className = "form-group mb-2">
                                <textarea value={this.state.values.message} name="message" className = "form-control" id="exampleFormControlTextarea1" placeholder="Enter Message" rows="8" required onChange={this.handleInputChange}></textarea>
                            </div>
                        </div>
                        <div className = "col-12">
                            <button 
                                className = "btn" 
                                onClick={this.sendMail} 
                                disabled={this.state.isSubmitting}
                                style={{backgroundColor: color2, color:color3}}
                            >
                                {(! this.state.isSubmitting)?"Send": "Wait " + fname}
                            </button>
                        </div>
                    </form> 
                    <div className={`message ${this.state.isError && "error"}`}>
                        {this.state.isSubmitting ? " Submitting..." : this.state.message}
                    </div>
                </div>
                </div>
            </>
        )
    }
}