import React from 'react';
import BaseStore from '../Stores/BaseStore';

export default class BlockForView extends React.Component {
    state = {
        display: true
    }
    componentWillMount(){
        //BaseStore.on('testAction', this.toggleDisplay);
    }
    componentWillUnmount(){
        //BaseStore.removeListener('testAction', this.toggleDisplay);
    }
    toggleDisplay = () =>{
        this.setState({display:!this.state.display})
    }
    render(){
        const visibleText = this.state.display? 'Action off':'Action on'
        return(<div>{visibleText}</div>)
    }
}
