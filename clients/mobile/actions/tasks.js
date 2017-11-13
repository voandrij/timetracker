export const REQUEST_TASKS = 'REQUEST_TASKS'
export const RECEIVE_TASKS = 'RECEIVE_TASKS'

function requestTasks() {
	return {
		type: REQUEST_TASKS
	}
}

function receiveTasks(json) {
	return {
		type: RECEIVE_TASKS,
		tasks: json.map(child => child)
	}
}

export function fetchTasks() {
	return dispatch => {
		dispatch(requestTasks())
		return fetch(`http://www.mocky.io/v2/5a0220ca3300001a13f6ee58`)
			.then(response => response.json())
			.then(json => dispatch(receiveTasks(json)))
	}
}

