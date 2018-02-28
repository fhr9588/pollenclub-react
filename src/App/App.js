import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Link,Switch,Redirect} from 'react-router-dom';
import {Icon} from 'antd';
import Bbs from '../routers/Bbs/Bbs';
import Circle from '../routers/Circle/Circle';
import logo from '../logo.svg';
import 'antd/dist/antd.css';
import './App.css';


class App extends Component {
    constructor(prop){
        super(prop);
        this.state={index:1};
    }

    //首页点击
    indexPage=()=>{
        this.setState({index:1});
    };

    //论坛点击
    bbsPage=()=>{
        this.setState({index:2});
    };

    //圈子点击
    circlePage=()=>{
        this.setState({index:3});
    };

    //花瓣点击
    petalPage=()=>{
        this.setState({index:4})
    };



  render() {
    return (
      <div className="App">
            <div className="header">
                花粉俱乐部
                <Link to="/"><Icon type="user" className="header-icon fr" /></Link>
            </div>
          <div className="nav clearfix">
              {this.state.index==1 ?
                  <Link to='/' className="active" onClick={this.indexPage}>首页</Link>
                  :
                  <Link to='/' onClick={this.indexPage}>首页</Link>
              }
              {this.state.index==2 ?
                  <Link to="/" className="active" onClick={this.bbsPage}>论坛</Link>
                  :
                  <Link to="/" onClick={this.bbsPage}>论坛</Link>
              }
              {this.state.index==3 ?
                  <Link to="/" className="active" onClick={this.circlePage}>圈子</Link>
                  :
                  <Link to="/" onClick={this.circlePage}>圈子</Link>
              }
              {this.state.index==4 ?
                  <Link to="/petal" className="active" onClick={this.petalPage}>花瓣</Link>
                  :
                  <Link to="/petal" onClick={this.petalPage}>花瓣</Link>
              }
          </div>
          </div>
    );
  }
}

export default App;
