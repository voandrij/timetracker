import React, { Component } from 'react'
import { View, Text, Picker } from 'react-native'
import { connect } from 'react-redux'
import { fetchTimelogs } from '../actions/timelogs'
import Timelogs from '../components/Timelogs'
import PropTypes from 'prop-types';

class TimelogsContainer extends React.Component {
	constructor(props) {
		super(props)
		this.handleRefreshClick = this.handleRefreshClick.bind(this)
	}

	componentDidMount() {
		const { dispatch } = this.props
		dispatch(fetchTimelogs())
	}

	handleRefreshClick(e) {
		e.preventDefault()
		const { dispatch} = this.props
		dispatch(fetchTimelogs())
	}

	render() {
		const { timelogs, isFetching} = this.props
		return (
			<View style = {styles.container}>
				<View>
					{isFetching && timelogs.length === 0 && <Text>Loading...</Text> }
					{!isFetching && timelogs.length === 0 && <Text>Empty.</Text> }
					{timelogs.length > 0 &&
					<View style={{ opacity: isFetching ? 0.5 : 1 }}>
						<Timelogs timelogs={timelogs} />
					</View>
					}
				</View>
			</View>

		)
	}
}

TimelogsContainer.propTypes = {
	timelogs: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired,
	dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
	const { timelogsReducer } = state
	const {
		isFetching,
		items: timelogs
	} = timelogsReducer || {
		isFetching: true,
		items: []
	}
	return {
		timelogs,
		isFetching
	}
}

export default connect(mapStateToProps)(TimelogsContainer)
