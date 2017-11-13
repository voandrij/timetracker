import React, { Component } from 'react'
import { View, Text} from 'react-native'
import PropTypes from 'prop-types';

export default class Projects extends React.Component {
	render() {
		return (
			<View>
				{this.props.projects.map((project, i) =>
					<Text key={i}>{project.name}</Text>
				)}
			</View>
		)
	}
}

Projects.propTypes = {
	projects: PropTypes.array.isRequired
}
