import React, { Component } from 'react'
import { View, Text} from 'react-native'
import PropTypes from 'prop-types';

export default class Timelogs extends React.Component {
	render() {
		return (
			<View>
				{this.props.timelogs.map((timelog, i) =>
					<Text key={i}>{timelog.id}</Text>
				)}
			</View>
		)
	}
}

Timelogs.propTypes = {
	timelogs: PropTypes.array.isRequired
}
