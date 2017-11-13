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
	}
}

