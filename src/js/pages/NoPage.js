import React from 'react';
import Paper from 'material-ui/Paper';
import Pager from 'react-pager';
import { withRouter } from "react-router";

class NoPage extends React.Component {

    goToRoot = (e) => {
        e.preventDefault();
        if(localStorage.getItem('auth') === 'admin'){
            this.props.router.push('admin/icon-operations/feedback/tirecenter');
        }else{
            this.props.router.push('dealer/info');
        }     
    }

    render() {
        return(
            <main>
                <Paper>
                    No Page, Sorry <a onClick={this.goToRoot}>Go to main page</a>
                </Paper>
            </main>
        )
    }
}

export default withRouter (NoPage);