import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default class Register extends Component {

    state = {
        username: "",
        password: "",
        password2: "",
        showUsernameAlert: false,
        showPasswordAlert: false,
        showUsernameLengthAlert: false,
        showPasswordLengthAlert: false
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            showPasswordAlert: false,
            showUsernameAlert: false
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const {username, password, password2} = this.state;
        this.register(username, password, password2);
    }

    async register(username, password, password2) {
        // check username length
        if(username.length < 5) {
            this.setState({
                showUsernameLengthAlert: true
            })
            return;
        }

        // check password length
        if(password.length < 5) {
            this.setState({
                showPasswordLengthAlert: true
            })
            return;
        }

        // Does passwords match
        if(password !== password2) {
            // alert("The passwords are not match");
            this.setState({
                showPasswordAlert: true
            })
            return;
        }

        // Check if username is available
        const res = await axios.get(`/api/user?username=${username}`);
        
        if(res.data){
            // alert("Username is taken, please try another one");
            this.setState({
                showUsernameAlert: true
            })
            return;
        } else {
            const newUser = {
                username,
                password,
                email: "",
                firstName: "",
                lastName: ""
            };
            const res2 = await axios.post("/api/register", newUser);
            this.props.history.push(`/user/${res2.data._id}`);
        }
    }

    render() {
        const {username, password, password2} = this.state
        return (
            <div className="container">
                <h1>Register</h1>

                {this.state.showPasswordAlert && 
                    (<div className="alert alert-danger">
                        The passwords you entered don't match, please try it again
                    </div>)}

                {this.state.showUsernameAlert && 
                    (<div className="alert alert-danger">
                        The username is taken, please try another one
                    </div>)}

                {this.state.showUsernameLengthAlert && 
                    (<div className="alert alert-danger">
                        Your username is too short, please make it at least 6 characters
                    </div>)}

                {this.state.showPasswordLengthAlert && 
                    (<div className="alert alert-danger">
                        Your password is too short, please make it at least 6 characters 
                    </div>)}

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            className="form-control"
                            value = {username}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password2">Verify Password</label>
                        <input
                            id="password2"
                            name="password2"
                            type="password"
                            className="form-control"
                            value={password2}
                            onChange={this.onChange}
                        />
                    </div>
                    <button
                        className="btn btn-primary btn-block"
                    >
                        Register
                    </button>
                    <Link className="btn btn-danger btn-block" to="/login">
                        Cancel
                    </Link>
                </form>
            </div>
        );
    }
}
