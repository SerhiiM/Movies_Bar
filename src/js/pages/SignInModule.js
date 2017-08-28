import React from 'react';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import * as cnst from '../common/constants';

class SignInModule extends React.Component {

    componentDidMount(){
        const key = localStorage.getItem(cnst.PASS_KEY);
        if(key){
            this.goToMoviesList();
        }
    }

    goToMoviesList = () => {
        this.props.router.push('/movies_list');
    }

    handleKeySave = () => {
        const key = this.refs.key.value;
        localStorage.setItem(cnst.PASS_KEY, key);
        this.goToMoviesList();
    }

    render() {
        return(
            <section className='sign_in'>
                <h4>Insert your key to App</h4>
                <input 
                    type ='text'
                    ref = 'key'
                    placeholder='Add key'/>
                <button 
                    onClick={this.handleKeySave}>
                        Ok
                </button>
                <details>
                    <summary>Test key</summary>
                    <mark>2bffc68560bcf99a67d3ea8fa8f937b4</mark>
                </details>
            </section>
        )
    }
}

const stateToProps = (state) => {
  return {
    profile: state.profile,
  }
}

const dispatchToProps = (dispatch) => {
  return {
    changeStore: (state) => {
      dispatch(state)
    }
  }
}

SignInModule = connect(
    stateToProps,
    dispatchToProps
    )(SignInModule);

export default withRouter(SignInModule);