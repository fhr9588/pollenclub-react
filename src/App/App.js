import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Link,Switch,Redirect} from 'react-router-dom';
import {Icon} from 'antd';
import Swiper from 'swiper';
import Index from '../routers/Index/Index';
import Bbs from '../routers/Bbs/Bbs';
import Circle from '../routers/Circle/Circle';
import logo from '../logo.svg';
import 'antd/dist/antd.css';
import '../../node_modules/swiper/dist/css/swiper.css';
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
      let match = this.props.match;
      console.log(match);
      return (
      <div className="App">
            <div className="header">
                花粉俱乐部
                <Link to="/"><Icon type="user" className="header-icon fr" /></Link>
            </div>
          {match.url!='/' ?
              <div className="nav clearfix">
                  <Link to={`${match.url}`} className={this.state.index==1 ? 'active':''} onClick={this.indexPage}>首页</Link>
                  <Link to={`${match.url}/bbs`} className={this.state.index==2 ? 'active':''} onClick={this.bbsPage}>论坛</Link>
                  <Link to={`${match.url}/circle`} className={this.state.index==3 ? 'active':''} onClick={this.circlePage}>圈子</Link>
                  <Link to="/petal" className={this.state.index==4 ? 'active':''} onClick={this.petalPage}>花瓣</Link>
              </div>
              :
              <div className="nav clearfix">
                  <Link to={`${match.url}app`} className={this.state.index==1 ? 'active':''} onClick={this.indexPage}>首页</Link>
                  <Link to={`${match.url}app/bbs`} className={this.state.index==2 ? 'active':''} onClick={this.bbsPage}>论坛</Link>
                  <Link to={`${match.url}app/circle`} className={this.state.index==3 ? 'active':''} onClick={this.circlePage}>圈子</Link>
                  <Link to="/petal" className={this.state.index==4 ? 'active':''} onClick={this.petalPage}>花瓣</Link>
              </div>
          }

          <div className="react-main">
              <Switch>
                  <Route path={`${match.url}`} exact component={Index} />
                  <Route path={`${match.url}/bbs`} component={Bbs} />
                  <Route path={`${match.url}/circle`} component={Circle} />
                  <Redirect to='/404' />
              </Switch>
          </div>
          </div>
    );
  }
}

export default App;
