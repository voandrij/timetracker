import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Picker, Button} from 'react-native'
import styles from '../resources/styles'

import DateTimePicker from 'react-native-modal-datetime-picker';

export default class extends React.Component {
	
	state = {
		isDateTimePickerVisible: false,
	};

	_showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

	_hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

	_handleDatePicked = (date) => {
		console.log('A date has been picked: ', date);
		this._hideDateTimePicker();
	};
	doNothing = () => {};
	
	render() {
		return (
			<View style={{flex: 1}}>
				<View style={styles.adderEditor}>
				<Text style={styles.titleText}>Project</Text>
				<Picker style={styles.picker}>
					<Picker.Item label="Project1" value="project1"  />
					<Picker.Item label="Project2" value="project2" />
				</Picker>
				<Text style={styles.titleText}>Task</Text>
				<Picker style={styles.picker}>
					<Picker.Item label="Task1" value="task1"  />
					<Picker.Item label="Task2" value="task2" />
				</Picker>
				<Text style={styles.titleText}>Status</Text>
				<Picker style={styles.picker}>
					<Picker.Item label="Status1" value="status1"  />
					<Picker.Item label="Status2" value="status2" />
				</Picker>
				<Text style={styles.titleText}>Started at</Text>
			
			
				<TouchableOpacity
				onPress={this._showDateTimePicker}>
					<Text style={styles.baseText}>15h 30m</Text>
				</TouchableOpacity>
				<DateTimePicker
				isVisible={this.state.isDateTimePickerVisible}
				onConfirm={this._handleDatePicked}
				onCancel={this._hideDateTimePicker}
				mode='time'
				/>
				</View>
				<View style={styles.grayBackground}>
				<Text style={styles.titleText}>Logged hours</Text>
				<Text style={styles.totalTime}>3h 15m</Text>
			
				<Text style={styles.titleText}>Finished at</Text>
			
			
				<TouchableOpacity
				onPress={this._showDateTimePicker}>
					<Text style={styles.baseText}>18h 00m</Text>
				</TouchableOpacity>
				<DateTimePicker
				isVisible={this.state.isDateTimePickerVisible}
				onConfirm={this._handleDatePicked}
				onCancel={this._hideDateTimePicker}
				mode='time'
				/>
				</View>
				<View style={styles.buttonBackground}>
					<TouchableOpacity
						style={styles.saveButton}
						onPress={this.onPress}
					>
						<Text>SAVE</Text>
					</TouchableOpacity>
				</View>

			</View>
		)
	}
}
