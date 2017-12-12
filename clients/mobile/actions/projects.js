export const REQUEST_PROJECTS = 'REQUEST_PROJECTS'
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS'

function requestProjects() {
	return {
		type: REQUEST_PROJECTS
	}
}

function receiveProjects(json) {
	return {
		type: RECEIVE_PROJECTS,
		projects: json.map(child => child)
	}
}

export function fetchProjects() {
	return dispatch => {
		dispatch(requestProjects())
		return fetch(`http://www.mocky.io/v2/5a020e89330000e910f6ee36`)
			.then(response => response.json())
			.then(json => dispatch(receiveProjects(json)))
			.catch((error) => {
				console.error(error);
			})
	}
}

export function newProject(project) {
	fetch('https://timetracker.com/projects', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(project),
	});
}

export function deleteProject(id) {
	fetch('https://timetracker.com/projects'+id, {
		method: 'DELETE',
		headers: {
			Accept: 'application/json'
		}
	});
}

export function editProject(id, project) {
	fetch('https://timetracker.com/projects'+id, {
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(project),
	});
}

