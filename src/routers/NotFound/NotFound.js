import React , { Component } from 'react';
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom';
class NotFound extends Component{
    constructor(prop){
        super(prop);
    }
    render(){
        return(
            <div>404</div>
        )
    }
}
export default NotFound;