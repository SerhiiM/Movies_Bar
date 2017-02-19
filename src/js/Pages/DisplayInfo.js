import React from 'react';
import {Link} from 'react-router';
import * as Actions from '../Actions/InfoActions';
import BaseStore from '../Stores/BaseStore';
import * as cnst from '../Common/constant';
import { connect } from 'react-redux';

export default class DisplayInfo extends React.Component {
    getInfoFromServer = () => {
        this.props.getInfoFromServer();
    }
    getRedux = () => {
        this.props.getRedux();
    }
    render() {
        console.log(this.props)
        return(
            <section>
                <nav className='NavigationBlock'>
                    <section className='NavigationBlockLinks'>
                        <Link to={`/home`}>Home</Link>
                        <Link to={`/`}>Login</Link>
                    </section>
                </nav>
                <section className='HomePageBlock'>
                    <button className = 'Btn' onClick={this.getInfoFromServer}>Click for info</button>
                    <mark>{this.props.info}</mark>
                </section>
                <section className='HomePageBlock'>
                    <button className = 'Btn' onClick={this.getRedux}>Get Redux</button>
                    {this.props.todos.map((todo)=>{
                        return(
                            <code>
                                {todo.text + '' + todo.id}
                            </code>
                        )
                    })}
                </section>
            </section>
        )
    }
}