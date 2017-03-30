import React from 'react';
import {Link} from 'react-router';
import * as Actions from '../Actions/InfoActions';
import * as cnst from '../Common/constant';
import { connect } from 'react-redux';
import DisplayInfo from './DisplayInfo';

class About extends React.Component {

    getInfoFromServer = () => {
        Actions.getInfoAboutProject(this.props.onTodoClick)
    }

    onTaskCreate = (text) =>{
        this.props.onTodoClick({
            'type': cnst.ADD_TODO,
            'text':text,
            'id': this.props.todos.length
        })
    }

    onTaskClick = (id) =>{
        this.props.onTodoClick({
            'type': cnst.COMPLETE_TODO,
            'id': id
        })
    }

    render() {
        console.log(this.props)
        return(
            <DisplayInfo 
            onTaskCreate={this.onTaskCreate} 
            getInfoFromServer = {this.getInfoFromServer}
            info = {this.props.serverInfo}
            todos = {this.props.todos}
            onTaskClick = {this.onTaskClick}
            />
        )
    }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    serverInfo: state.infoFromServer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (state) => {
      dispatch(state)
    }
  }
}

About = connect(
    mapStateToProps,
    mapDispatchToProps
    )(About);
export default About