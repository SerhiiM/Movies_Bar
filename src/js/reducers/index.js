import {
	combineReducers
} from 'redux';
import {
	reducer as notifications
} from 'react-notification-system-redux';

const Storage = combineReducers({
	notifications
})


export default Storage