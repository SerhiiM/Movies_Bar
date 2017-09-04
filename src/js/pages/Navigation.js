import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

class Navigation extends React.Component {
  render() {
      return (
        <div/>
      );
    }
}


const stateToProps = (state) => {
  return {
    
  }
}

Navigation = connect(
    stateToProps
    )(Navigation);

export default Navigation;