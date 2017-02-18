import React from 'react';
import { Router, Route, Link, browserHistory} from 'react-router';
import Home from './Home';
import About from './About';
import Login from './Login';
import "../../style/AppStyles.scss";

export default class MainPage extends React.Component {
    render() {
        return(
            <Router history={browserHistory}>
                <Route path="/" component={Login}/>   
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
            </Router>
        )
    }
}
