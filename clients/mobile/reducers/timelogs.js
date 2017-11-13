import { combineReducers } from 'redux'
import {
	REQUEST_TIMELOGS, RECEIVE_TIMELOGS
} from '../actions/timelogs'


export default function timelogsReducer(state = {
	isFetching: false,
	items: []
}, action) {
	switch (action.type) {
		case REQUEST_TIMELOGS:
			return Object.assign({}, state, {
				isFetching: true
			})
		case RECEIVE_TIMELOGS:
			return Object.assign({}, state, {
				isFetching: false,
				items: action.timelogs
			})
		default:
			return state
	}
}


