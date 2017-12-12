export const REQUEST_TIMELOGS = 'REQUEST_TIMELOGS'
export const RECEIVE_TIMELOGS = 'RECEIVE_TIMELOGS'

function requestTimelogs() {
	return {
		type: REQUEST_TIMELOGS
	}
}

function receiveTimelogs(json) {
	return {
		type: RECEIVE_TIMELOGS,
		timelogs: json.map(child => child)
	}
}

export function fetchTimelogs() {
	return dispatch => {
		dispatch(requestTimelogs())
		return fetch(`http://www.mocky.io/v2/5a0221ba330000d810f6ee5a`)
			.then(response => response.json())
			.then(json => dispatch(receiveTimelogs(json)))
			.catch((error) => {
				console.error(error);
			})
	}
}

export function newTimelog(timelog, projectId) {
	fetch('https://timetracker.com/projects/'+projectId+'/timelogs', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(timelog),
	});
}

export function deleteTimelog(id, projectId) {
	fetch('https://timetracker.com/projects'+projectId+'/timelogs'+id, {
		method: 'DELETE',
		headers: {
			Accept: 'application/json'
		}
	});
}

export function editTimelog(id, timelog, projectId) {
	fetch('https://timetracker.com/projects'+projectId+'/timelogs'+id, {
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(timelog),
	});
}

