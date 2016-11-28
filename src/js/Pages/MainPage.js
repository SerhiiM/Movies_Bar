import React from 'react';
import dispatcher from "../dispatcher";

export default class MainPage extends React.Component {

    constructor(props) {
          super(props);
          this.onClickForAction = this.onClickForAction.bind(this);
          this.state = {
              name:'This is it guys!'
          };
    }
    onClickForAction(){
        console.log('btn have been clicked');
        dispatcher.dispatch({type: 'testAction', hello:true });
    }
    render(){
        console.log(this.state.name)
        return(<div>
            <div>{this.state.name}</div>
            <button onClick={this.onClickForAction}>Click for dispatcher</button>
            </div>)
    }
}
