import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Footer extends Component {

  render() {
    const {uid} = this.props
    return (
      <nav className="navbar navbar-dark bg-danger fixed-bottom">
        <Link to={`/user/${uid}`}>
          <i className="fas fa-user" />
        </Link>
      </nav>
    )
  }
}
