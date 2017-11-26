import {
	REQUEST_TASKS, RECEIVE_TASKS
} from '../actions/tasks'


export default function tasksReducer(state = {
	isFetching: false,
	items: []
}, action) {
	switch (action.type) {
		case REQUEST_TASKS:
			return Object.assign({}, state, {
				isFetching: true
			})
		case RECEIVE_TASKS:
			return Object.assign({}, state, {
				isFetching: false,
				items: action.tasks
			})
		default:
			return state
	}
}


