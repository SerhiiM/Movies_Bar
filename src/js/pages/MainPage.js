import React from 'react';
import { Router, Route, Link, browserHistory, hashHistory} from 'react-router';

import * as Routes from "./Routes";
import Footer from './Footer';
import StatusBar from './StatusBar';

import "../../style/AppStyles.scss";

export default class MainPage extends React.Component {
    render() {
        return(
            <main className = 'main_block'>
                <StatusBar/>
                <Router 
                    routes={Routes.getAppRoutes()} 
                    history={hashHistory}>
                </Router>
                <Footer/>
            </main>
        )
    }
}
