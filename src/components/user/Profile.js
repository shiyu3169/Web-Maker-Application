import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Profile extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary fixed-top">
          <span className="navbar-brand mb-0 h1">Profile</span>
          <a href="profile.html"><i className="fas fa-check"></i></a>
        </nav>
        <div className='container'>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input placeholder="Enter or edit your username..." className="form-control" type="text" id='username' name='username' />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input placeholder="Enter or edit your email address..." type="email" className="form-control" id="email" name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input placeholder="Enter or edit your first name..." className="form-control" type="text" id="firstName" name="firstName" />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input placeholder="Enter or edit your last name..." type="text" className="form-control" id="lastName" name="lastName" />
                </div>
                <Link className="btn btn-primary btn-block" to="/user/123/website">Websites</Link>
                <Link to="/login" className="btn btn-danger btn-block">Logout</Link>
            </form>
        </div>
        <nav className="navbar navbar-dark bg-primary fixed-bottom">
            <Link to="/user/123"><i className="fas fa-user"></i></Link>
        </nav>
      </div>
    )
  }
}
