import React from 'react';
import {Link} from 'react-router';
import * as Actions from '../Actions/InfoActions';

export default class About extends React.Component {
    getInfoFromServer = () => {
        Actions.getInfoAboutProject()
    }
    render() {
        return(
            <section>
                <Link to={`/home`}>Home</Link>
                <button onClick={this.getInfoFromServer}>Click for info</button>
            </section>
        )
    }
}