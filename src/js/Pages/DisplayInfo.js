import React from 'react';
import {Link} from 'react-router';
import * as Actions from '../Actions/InfoActions';
import * as cnst from '../Common/constant';
import { connect } from 'react-redux';

export default class DisplayInfo extends React.Component {
    getInfoFromServer = () => {
        this.props.getInfoFromServer();
    }

    onTaskCreate = () => {
        this.props.onTaskCreate(this.refs.taskText.value);
        this.refs.taskText.value = '';
    }

    onTaskClick = (id) => {
        const task = this.props.todos.find((todo)=>{
            return todo.id === id
        })
        if(task.completed === false){
            this.props.onTaskClick(id)
        }else{
            alert('Task is allready completed')
        }
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
                    {this.props.info.map((infoBlock, index)=>{
                        return <mark> {infoBlock.info + ' '+ index} </mark>
                    })}
                </section>
                <section className='HomePageBlock'>
                    <input ref='taskText'></input>
                    <button className = 'Btn' onClick={this.onTaskCreate}>Create task</button>
                    <ol>
                    {this.props.todos.map((todo)=>{
                        return(
                            <li>
                                <code 
                                    onClick={this.onTaskClick.bind(this,todo.id)}
                                    className={todo.completed ? 
                                        'DisplayInfoTaskCompleted' : 'DisplayInfoTaskActive'}>
                                    {'And the task is : ' + todo.text}
                                </code>
                            </li>
                        )
                    })}
                    </ol>
                </section>
            </section>
        )
    }
}