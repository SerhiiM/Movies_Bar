import React from 'react';
import { Router, browserHistory} from 'react-router';
import * as Routes from "./Routes";

import "../../style/AppStyles.scss";

export default class MainPage extends React.Component {
    render() {
        return(
            <Router 
                routes={Routes.getAppRoutes()} 
                history={browserHistory}>
            </Router>
        )
    }
}
