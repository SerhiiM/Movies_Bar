import React from 'react';
import * as cnst from '../Common/constant';

export default class BlockForView extends React.Component {
    state = {
        display: true
    }
    toggleDisplay = () =>{
        this.setState({display:!this.state.display})
    }
    render(){
        const visibleText = this.state.display? 'Action off':'Action on'
        return(<div>{visibleText}</div>)
    }
}
