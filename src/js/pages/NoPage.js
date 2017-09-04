import React from 'react';
import Paper from 'material-ui/Paper';
import { withRouter } from "react-router";

class NoPage extends React.Component {

    goToRoot = (e) => {
        e.preventDefault();
        this.props.router.push('/'); 
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