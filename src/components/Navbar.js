import React, { Component } from 'react';
import { Link } from 'react-router';
import { MuiThemeProvider } from 'material-ui';

export default class Navbar extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link to='/' className="navbar-brand" href="#">Flash Card App</Link>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-left">
                  <li><Link to='/'>LOGIN</Link></li>
                  <li><Link to='/manage'>MANAGEMENT</Link></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to='/'>HOME</Link></li>
                  <li><Link to='/practices'>PRACTICE</Link></li>
                  <li><Link to='/'>TEST</Link></li>
                </ul>
              </div>
            </div>
          </nav>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
};
