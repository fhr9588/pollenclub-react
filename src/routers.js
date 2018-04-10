import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Link,Switch,Redirect} from 'react-router-dom';
import App from './App/App';
import Petal from './routers/Petal/Petal';
import Search from './routers/Search/Search';
import BbsDetail from './routers/BbsDetail/BbsDetail';
import BbsDetailArticle from './routers/BbsDetailArticle/BbsDetailArticle';
import Login from './routers/Login/Login';
import Register from './routers/Register/Register';
import SecurityCenter from './routers/SecurityCenter/SecurityCenter';
import UserCenter from './routers/UserCenter/UserCenter';
import ResetPwd from './routers/ResetPwd/ResetPwd';
import NotFound from './routers/NotFound/NotFound';
class Routers extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/app" component={App} />
                    <Route path="/petal" component={Petal} />
                    <Route path="/search/:id" component={Search} />
                    <Route path="/bbs_detail" component={BbsDetail}  />
                    <Route path="/bbs_detail_article" component={BbsDetailArticle} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/security_center" component={SecurityCenter} />
                    <Route path="/user_center" component={UserCenter} />
                    <Route path="/reset_pwd" component={ResetPwd} />
                    <Route path="/404" component={NotFound} />
                    <Redirect from="*" to="/404" />
                </Switch>
            </Router>
        )
    }
}
export default Routers;