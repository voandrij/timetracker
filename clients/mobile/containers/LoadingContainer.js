import React, { Component } from 'react'
import { View, Text} from 'react-native'
import Loading from '../components/Loading'
import styles from '../resources/styles'

export default class extends React.Component {
	render() {
		return (
			<View style = {styles.container}>
					<Loading/>
			</View>

		)
	}
}
