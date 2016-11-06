import React from 'react';

export default class MainPage extends React.Component {

    constructor(props) {
          super(props);
          this.state = {
              name:'This is it guys!'
          };
    }

    render(){
        console.log(this.state.name)
        return(<div>{this.state.name}</div>)
    }
}
