import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Link,Switch,Redirect} from 'react-router-dom';
import App from './App/App';
import Bbs from './routers/Bbs/Bbs';
import Petal from './routers/Petal/Petal';
class Routers extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/app" component={App} />
                    <Route path="/petal" component={Petal} />
                </Switch>
            </Router>
        )
    }
}
export default Routers;