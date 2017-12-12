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
			.catch((error) => {
				console.error(error);
			})
	}
}

export function newTask(task, projectId) {
	fetch('https://timetracker.com/projects/'+projectId+'/tasks', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(task),
	});
}

export function deleteTask(id, projectId) {
	fetch('https://timetracker.com/projects'+projectId+'/tasks'+id, {
		method: 'DELETE',
		headers: {
			Accept: 'application/json'
		}
	});
}

export function editTask(id, task, projectId) {
	fetch('https://timetracker.com/projects'+projectId+'/tasks'+id, {
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(task),
	});
}

