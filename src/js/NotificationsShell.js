import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import Notifications from 'react-notification-system-redux';

class NotificationsShell extends React.Component {
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
        <section>
          {this.props.children}
          <Notifications
            notifications={notifications}
            style={style}
          />
        </section>
      );
    }
}


NotificationsShell.propTypes = {
  notifications: PropTypes.array
};

const stateToProps = (state) => {
  return {
    notifications: state.notifications
  }
}

NotificationsShell = connect(
    stateToProps
    )(NotificationsShell);

export default (NotificationsShell);