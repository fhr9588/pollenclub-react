import React from 'react';
import ReactDOM from 'react-dom';
import './Style/index.css';
import App from './App/App';
import Routers from './routers';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routers />, document.getElementById('root'));
registerServiceWorker();
