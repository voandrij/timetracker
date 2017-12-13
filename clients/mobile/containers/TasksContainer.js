import React, { Component } from 'react'
import { View, Text, Picker } from 'react-native'
import { connect } from 'react-redux'
import { fetchTasks } from '../actions/tasks'
import Tasks from '../components/Tasks'
import PropTypes from 'prop-types';

class TasksContainer extends React.Component {
	constructor(props) {
		super(props)
		this.handleRefreshClick = this.handleRefreshClick.bind(this)
	}

	componentDidMount() {
		const { dispatch } = this.props
		dispatch(fetchTasks())
	}

	handleRefreshClick(e) {
		e.preventDefault()
		const { dispatch} = this.props
		dispatch(fetchTasks())
	}

	render() {
		const { tasks, isFetching} = this.props
		return (
			<View style = {styles.container}>
				<View>
					{isFetching && tasks.length === 0 && <Text>Loading...</Text> }
					{!isFetching && tasks.length === 0 && <Text>Empty.</Text> }
					{tasks.length > 0 &&
					<View style={{ opacity: isFetching ? 0.5 : 1 }}>
						<Tasks tasks={tasks} />
					</View>
					}
				</View>
			</View>
		)
	}
}

TasksContainer.propTypes = {
	tasks: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired,
	dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
	const { tasksReducer } = state
	const {
		isFetching,
		items: tasks
	} = tasksReducer || {
		isFetching: true,
		items: []
	}
	return {
		tasks,
		isFetching
	}
}

export default connect(mapStateToProps)(TasksContainer)
