import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../utility/Footer';
import Websites from './Websites';

export default class WebsiteEdit extends Component {
  state = {
    uid: this.props.match.params.uid,
    wid: this.props.match.params.wid,
    name: '',
    description: ''
  };

  getWebsite = wid => {
    let currentWeb;
    for (let website of this.state.websites) {
      if (website._id === wid) {
        currentWeb = website;
        break;
      }
    }
    this.setState({
      name: currentWeb.name,
      description: currentWeb.description
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  delete = async () => {
    await axios.delete(`/api/website/${this.state.wid}`);
    this.props.history.push(`/user/${this.state.uid}/website`);
  };

  onSubmit = async e => {
    e.preventDefault();

    const newWeb = {
      _id: this.state.wid,
      name: this.state.name,
      description: this.state.description,
      developerId: this.state.uid
    };
    await axios.put('/api/website', newWeb);
    this.props.history.push(`/user/${this.state.uid}/website`);
  };

  render() {
    const { uid } = this.state;
    return (
      <div>
        <nav className='navbar navbar-dark bg-primary fixed-top row'>
          <div className='col-lg-4 d-none d-lg-block text-center text-white'>
            <Link className='float-left' to={`/user/${uid}/website`}>
              <i className='fas fa-chevron-left' />
            </Link>
            <span className=''>Websites</span>
            <Link className='float-right' to={`/user/${uid}/website/new`}>
              <i className='fas fa-plus' />
            </Link>
          </div>
          <div className='col-lg-8 text-center text-white'>
            <Link className='d-lg-none float-left' to={`/user/${uid}/website`}>
              <i className='fas fa-chevron-left' />
            </Link>
            <span>Edit Website</span>
            <button form='editWebForm' className='float-right btn'>
              <i className='fas fa-check' />
            </button>
          </div>
        </nav>

        <div className='row'>
          <div className='col-4 d-none d-sm-block'>
            <div className='container-fluid'>
              <Websites uid={uid} />
            </div>
          </div>

          <div className='col-sm-8'>
            <div className='container-fluid'>
              <form id='editWebForm' onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <label htmlFor='name'>
                    <b>Name</b>
                  </label>
                  <input
                    id='name'
                    name='name'
                    className='form-control'
                    type='text'
                    placeholder='Name of the Website'
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='description'>
                    <b>Description</b>
                  </label>
                  <textarea
                    id='description'
                    name='description'
                    rows='5'
                    className='form-control'
                    type='text'
                    value={this.state.description}
                    onChange={this.onChange}
                    placeholder='Describe the Website'
                  />
                </div>
                <Link
                  to={`/user/${uid}/website`}
                  className='btn btn-lg btn-warning'
                >
                  Cancel
                </Link>
                <button
                  type='button'
                  onClick={this.delete}
                  className='btn btn-lg btn-danger float-right'
                >
                  Delete
                </button>
              </form>
            </div>
          </div>
        </div>

        <Footer uid={uid} />
      </div>
    );
  }
}
