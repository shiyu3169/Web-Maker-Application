import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Login extends Component {
  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        <form>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input placeholder="Enter your username here..." className="form-control" type="text" id="username" name="username" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input placeholder="Enter your password here..." type="password" className="form-control" id="password" name="password" />
            </div>
            <Link className="btn btn-success btn-block" to="/user/123" >Login</Link>
            <Link className="btn btn-primary btn-block" to="/register" >Register</Link>
        </form>
    </div>
    )
  }
}
