import React from 'react';
import {Link} from 'react-router';
import * as Actions from '../Actions/InfoActions';
import BaseStore from '../Stores/BaseStore';
import * as cnst from '../Common/constant';

export default class About extends React.Component {
    state = {
        info: BaseStore.getInfo()
    }
    componentWillMount(){
        BaseStore.addChangeListener(cnst.EVENT_RESEIVE_INFO, this.getInfo);
    }
    componentWillUnmount(){
        BaseStore.removeChangeListener(cnst.EVENT_RESEIVE_INFO, this.getInfo);
    }
    getInfo = () => {
        const info = BaseStore.getInfo()
        this.setState({ info:info })
    }
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
                    <mark>{this.state.info}</mark>
                </section>
            </main>
        )
    }
}