import React, { Component } from 'react'
import { View, Text} from 'react-native'
import Footer from '../components/Footer'
import styles from '../resources/styles'

export default class extends React.Component {
	render() {
		return (
			<View style = {styles.container}>
				<View>
					<Footer/>
				</View>
			</View>

		)
	}
}
