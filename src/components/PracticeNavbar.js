import React, { Component } from 'react';
import { Link } from 'react-router'

export default class PracticeNavbar extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <ol className="breadcrumb">
            <li><Link to='/randomQuestion'>Random</Link></li>
            <li><Link to='/'>Category</Link></li>
            <li>Data</li>
          </ol>
        </div>
        {this.props.children}
      </div>
    )
  }
};
