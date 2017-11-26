import React, { Component } from 'react'
import { View, Text, Image} from 'react-native'
import {PROJECTNAME} from '../resources/constants';
import styles from '../resources/styles'
//the loading screen for the project

export default class Loading extends React.Component {
	render() {
		return (
			<View>
				<Image
					style={styles.logo}
					source={require('../resources/img/Logo.png')}
				/>
				<Text>{PROJECTNAME}</Text>
			</View>
		)
	}
}

