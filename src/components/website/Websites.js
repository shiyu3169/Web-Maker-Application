import React, { Component } from 'react';
import axios from "axios";
import {Link} from "react-router-dom"

export default class Websites extends Component {

  state={
    websites: []
  }

  async componentDidMount() {
    const res = await axios.get(`/api/user/${this.props.uid}/website`);
    this.filterWebsites(res.data);
  }


  filterWebsites = (websites) => {
    const newWebsites = websites.filter(
        website => (website.developerId === this.props.uid)
    )
    this.setState({
        websites: newWebsites
    })
  }

  render() {
    const {uid} = this.props
    return (
      <ul className='list-group-flush'>
        {this.state.websites.map(website => (
          <li key={website._id} className='list-group-item'>
            <Link to={`/user/${uid}/website/${website._id}/page`}>
              {website.name}
            </Link>
            <Link
              to={`/user/${uid}/website/${website._id}`}
              className='float-right'
            >
              <i className='fas fa-cog' />
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
