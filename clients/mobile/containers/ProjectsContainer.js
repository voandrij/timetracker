import React, { Component } from 'react'
import { View, Text, Picker } from 'react-native'
import { connect } from 'react-redux'
import { fetchProjects } from '../actions/projects'
import Projects from '../components/Projects'
import Loading from '../components/Loading'
import PropTypes from 'prop-types';
import styles from '../resources/styles';

class ProjectsContainer extends React.Component {
	constructor(props) {
		super(props)
		this.handleRefreshClick = this.handleRefreshClick.bind(this)
	}

	componentDidMount() {
		const { dispatch } = this.props
		dispatch(fetchProjects())
	}

	handleRefreshClick(e) {
		e.preventDefault()
		const { dispatch} = this.props
		dispatch(fetchProjects())
	}

	render() {
		const { projects, isFetching} = this.props
		return (

			<View style = {styles.container}>
				<View>
					{isFetching && projects.length === 0 && <Loading/> }
					{!isFetching && projects.length === 0 && <Text>Empty.</Text> }
					{projects.length > 0 &&
					<View style={{ opacity: isFetching ? 0.5 : 1 }}>
						<Projects projects={projects} />
					</View>
					}
				</View>
			</View>

		)
	}
}

ProjectsContainer.propTypes = {
	projects: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired,
	dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
	const { projectsReducer } = state
	const {
		isFetching,
		items: projects
	} = projectsReducer || {
		isFetching: true,
		items: []
	}
	return {
		projects,
		isFetching
	}
}

export default connect(mapStateToProps)(ProjectsContainer)
