import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Link,Switch,Redirect} from 'react-router-dom';
import App from './App/App';
class Routers extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/app" component={App} />
                </Switch>
            </Router>
        )
    }
}
export default Routers;