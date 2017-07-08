import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import Notifications from 'react-notification-system-redux';

class Footer extends React.Component {
  render() {
      const {notifications} = this.props;
      const style = {
        NotificationItem: { 
          DefaultStyle: { 
            margin: '10px 5px 2px 1px'
          }
        }
      };

      return (
        <Notifications
          notifications={notifications}
          style={style}
        />
      );
    }
}


Footer.propTypes = {
  notifications: PropTypes.array
};

const stateToProps = (state) => {
  return {
    notifications: state.notifications
  }
}

Footer = connect(
    stateToProps
    )(Footer);

export default (Footer);