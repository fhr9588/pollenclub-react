import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Link,Switch,Redirect} from 'react-router-dom';
import App from './App/App';
import Petal from './routers/Petal/Petal';
import NotFound from './routers/NotFound/NotFound';
class Routers extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/app" component={App} />
                    <Route path="/petal" component={Petal} />
                    <Route path="/404" component={NotFound} />
                    <Redirect from="*" to="/404" />
                </Switch>
            </Router>
        )
    }
}
export default Routers;