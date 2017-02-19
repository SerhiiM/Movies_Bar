import React from 'react';
import {Link} from 'react-router';
import * as Actions from '../Actions/InfoActions';
import BaseStore from '../Stores/BaseStore';
import * as cnst from '../Common/constant';
import { connect } from 'react-redux';
import DisplayInfo from './DisplayInfo';

class About extends React.Component {
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
    getRedux = () =>{
        this.props.onTodoClick({
            'type': 'ADD_TODO',
            'text':'deeep'
        })
    }
    render() {
        console.log(this.props)
        return(
            <DisplayInfo 
            getRedux={this.getRedux} 
            getInfoFromServer = {this.getInfoFromServer}
            info = {this.state.info}
            todos = {this.props.todos}
            />
        )
    }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
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