import React from 'react';
import dispatcher from "../dispatcher";
import BlockForView from './BlockForView';

export default class MainPage extends React.Component {

    state = {
        name:'This is it guys!'
    }
    onClickForAction = () => {
        console.log('btn have been clicked');
        dispatcher.dispatch({type: 'testAction', hello:true });
    }
    render(){
        console.log(this.state.name)
        return(<div>
            <div>{this.state.name}</div>
            <button onClick={this.onClickForAction}>Click for dispatcher</button>
            <BlockForView/>
            </div>)
    }
}
