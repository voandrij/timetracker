import React, { Component } from 'react'
import { View, Text} from 'react-native'
import PropTypes from 'prop-types';

export default class Tasks extends React.Component {
	render() {
		return (
			<View>
				{this.props.tasks.map((task, i) =>
					<Text key={i}>{task.name}</Text>
				)}
			</View>
		)
	}
}

Tasks.propTypes = {
	tasks: PropTypes.array.isRequired
}
