import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class WebsiteList extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary fixed-top">
            <Link to="/user/123"><i className="fas fa-chevron-left"></i></Link>
            <span className="navbar-brand mb-0 h1">Websites</span>
            <Link to="/user/123/website/new"><i className="fas fa-plus"></i></Link>
        </nav>
        <section className="container">
            <ul className="list-group">
                <li className="list-group-item">
                    <Link to="/user/:uid/website/:wid/page">Address Book App</Link>
                    <Link className="float-right" to="/user/:uid/website/:wid"><i className="fas fa-cog"></i></Link>
                </li>
                <li className="list-group-item">
                <Link to="/user/:uid/website/:wid/page">Blogger</Link>
                    <Link className="float-right" to="/user/:uid/website/:wid"><i className="fas fa-cog"></i></Link>
                </li>
                <li className="list-group-item">
                <Link to="/user/:uid/website/:wid/page">Blog App</Link>
                    <Link className="float-right" to="/user/:uid/website/:wid"><i className="fas fa-cog"></i></Link>
                </li>
                <li className="list-group-item">
                <Link to="/user/:uid/website/:wid/page">Script Test App</Link>
                    <Link className="float-right" to="/user/:uid/website/:wid"><i className="fas fa-cog"></i></Link>
                </li>
            </ul>
        </section>
        <nav className="navbar navbar-dark bg-primary fixed-bottom">
            <Link to="/user/123"><i className="fas fa-user"></i></Link>
        </nav>
      </div>
    )
  }
}
