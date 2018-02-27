import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Link,Switch,Redirect} from 'react-router-dom';
import {Icon} from 'antd';
import logo from '../logo.svg';
import 'antd/dist/antd.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
            <div className="header">
                花粉俱乐部
                <Link to="/"><Icon type="user" className="header-icon fr" /></Link>
            </div>
          </div>
    );
  }
}

export default App;
