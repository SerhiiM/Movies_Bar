import React from 'react';
import dispatcher from "../dispatcher";
import BlockForView from './BlockForView';

export default class MainPage extends React.Component {

    state = {
        name:'This is it guys!',

        numbers:'',
        result:'',
    }
    onClickForAction = () => {
        console.log('btn have been clicked');
        dispatcher.dispatch({type: 'testAction', visibleText:true });
    }
    iqTest = () => {
        const arr = this.state.numbers.split(" ")
        const numbers = arr.map((el)=>{return parseInt(el)});
        
        var odd = numbers.filter((el)=>{ return el % 2 === 1});
        var even = numbers.filter((el)=>{ return el % 2 === 0});
        
        const result =  odd.length < even.length ? 
            (numbers.indexOf(odd[0]) + 1) : 
            (numbers.indexOf(even[0]) + 1);
        this.setState({result:result});
    }
    addNumbers = (e) => {
        this.setState({numbers:e.target.value});
    }
    render(){
        const result = this.state.result
        console.log(this.state.name)
        return(<div>
            <div>{this.state.name}</div>
            <input onChange={this.addNumbers}/>
            <h4>Exeption on position: {result}</h4>
            <button onClick = {this.iqTest}>Count</button>
            <button onClick={this.onClickForAction}>Click for dispatcher</button>
            <BlockForView/>
            </div>)
    }
}
