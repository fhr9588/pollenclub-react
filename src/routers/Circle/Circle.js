import React , { Component } from 'react';
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom';
import './Circle.css';
class Circle extends Component{
    constructor(prop){
        super(prop);
    }
    render(){
        return(
            <div>Circle
            </div>
        )
    }
}
export default Circle;