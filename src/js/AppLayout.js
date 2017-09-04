import React from "react";
import {withRouter} from "react-router";

import NoPage from './pages/NoPage';

import Navigation from './pages/Navigation';
import Footer from './pages/Footer';

class AdminAppLayout extends React.Component {
    render() {
        const {
            content,
            routes
        } = this.props;
        
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