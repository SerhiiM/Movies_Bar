import React from "react";
import {withRouter} from "react-router";

import NoPage from './pages/NoPage';

import Navigation from './pages/Navigation';
import Footer from './pages/Footer';

class AppLayout extends React.Component {
    render() {
        const {
            content,
            routes
        } = this.props;
        debugger
        return (
            <section>
                <Navigation />
                <main>
                    {
                        content || <NoPage/>
                    }
                </main>
                <Footer />
            </section>
        );
    }
}

export default withRouter(AppLayout);