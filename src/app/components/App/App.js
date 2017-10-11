import React, { Component } from 'react';
import logo from '../../assets/svg/logo.svg';
import './App.css';

import { loadSidebar } from '../../helpers/apiHelper.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageName: 'home',
      sideBarLinks: []
    }
  }

  componentWillMount = () => {
    loadSidebar(this.state.pageName).then((sideBarLinks) => {
      this.setState({ sideBarLinks })
    });
  };

  handleClick = (e) => {
    this.setState({ pageName: e.target.id })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul>
          {this.state.sideBarLinks.map((link) => (
            <li
              id={link.key}
              key={link.key}
              className={link.key === this.state.pageName ? 'active' : 'notActive'}
              onClick={this.handleClick}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
