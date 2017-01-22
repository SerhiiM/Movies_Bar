import React from 'react';
import BaseStore from '../Stores/BaseStore';
import * as cnst from '../Common/constant';

export default class BlockForView extends React.Component {
    state = {
        display: true
    }
    componentWillMount(){
        BaseStore.addChangeListener(cnst.EVENT_TEST_ACTION, this.toggleDisplay);
    }
    componentWillUnmount(){
        BaseStore.removeChangeListener(cnst.EVENT_TEST_ACTION, this.toggleDisplay);
    }
    toggleDisplay = () =>{
        this.setState({display:!this.state.display})
    }
    render(){
        const visibleText = this.state.display? 'Action off':'Action on'
        return(<div>{visibleText}</div>)
    }
}
