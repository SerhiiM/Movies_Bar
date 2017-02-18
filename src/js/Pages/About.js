import React from 'react';
import {Link} from 'react-router';
import * as Actions from '../Actions/InfoActions';

export default class About extends React.Component {
    getInfoFromServer = () => {
        Actions.getInfoAboutProject()
    }
    render() {
        return(
            <main>
                <nav className='NavigationBlock'>
                    <section className='NavigationBlockLinks'>
                        <Link to={`/home`}>Home</Link>
                        <Link to={`/`}>Login</Link>
                    </section>
                </nav>
                <section className='HomePageBlock'>
                    <button onClick={this.getInfoFromServer}>Click for info</button>
                </section>
            </main>
        )
    }
}