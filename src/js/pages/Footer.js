import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

class Footer extends React.Component {
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

Footer = connect(
    stateToProps
    )(Footer);

export default Footer;