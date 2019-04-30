import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Register extends Component {
  render() {
    return (
      <div className="container">
        <h1>Register</h1>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input id="username" name="username" type="text" className="form-control"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" className="form-control"/>
          </div>
          <div className="form-group">
            <label htmlFor="password2">Verify Password</label>
            <input id="password2" name="password2" type="password" className="form-control"/>
          </div>
          <Link className="btn btn-primary btn-block" to="/user/userId">Register</Link>
          <Link className="btn btn-danger btn-block" to="/login">Cancel</Link>
        </form>
      </div>
    )
  }
}
