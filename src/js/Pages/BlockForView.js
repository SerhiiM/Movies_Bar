import React from 'react';
import BaseStore from '../Stores/BaseStore';

export default class BlockForView extends React.Component {
    state = {
        display: true
    }
    componentWillMount(){
        BaseStore.addChangeListener('eventTestAction', this.toggleDisplay);
    }
    componentWillUnmount(){
        BaseStore.removeChangeListener('eventTestAction', this.toggleDisplay);
    }
    toggleDisplay = () =>{
        this.setState({display:!this.state.display})
    }
    render(){
        const visibleText = this.state.display? 'Action off':'Action on'
        return(<div>{visibleText}</div>)
    }
}
