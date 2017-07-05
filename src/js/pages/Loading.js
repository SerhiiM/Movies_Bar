import React from 'react';
import { withRouter } from "react-router";
import Spinner from 'react-spinkit';
import { connect } from 'react-redux';
import {loadInitDataForAdmin} from '../actions';

class Loading extends React.Component {

    componentDidMount(){
        loadInitDataForAdmin(this.props.dispatcher,()=>{
            const path = localStorage.getItem('path');
            if(path != '/' ){
                this.props.router.push(path);
            } 
            else {
                if(localStorage.getItem('auth') === 'admin'){
                    this.props.router.push('admin/icon-operations/feedback/tirecenter');
                }else{
                    this.props.router.push('dealer/info');
                }
            }
        })
    }
    
    render() {
        return(
            <main className='loading-block'>
                <Spinner name="cube-grid" color="orange" className='loading-spinner'/>
            </main>
        )
    }
}

const stateToProps = (state) => {
  return {
    stations: state.stations,
    dealers: state.dealers
  }
}

const dispatchToProps = (dispatch) => {
  return {
    dispatcher: (state) => {
      dispatch(state)
    },
  }
}

Loading = connect(
    stateToProps,
    dispatchToProps
    )(Loading);


export default withRouter (Loading);