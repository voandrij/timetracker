import React from 'react';
import {View, Text, StyleSheet, Button} from "react-native";
import {Actions} from "react-native-router-flux";


export default class extends React.Component {
	render(){
		return (
			<View>
				<Button onPress={Actions.login} title={"login"}></Button>
				<Button onPress={Actions.loading} title={"loading"}></Button>
				<Button onPress={Actions.timelogs} title={"timelogs"}></Button>
				<Button onPress={Actions.addingTime} title={"addingTime"}></Button>
				<Button onPress={Actions.addingTimeTracker} title={"addingTimeTracker"}></Button>
				<Button onPress={Actions.editingTime} title={"editingTime"}></Button>
				<Button onPress={Actions.footer} title={"footer"}></Button>
				<Button onPress={Actions.mainPage} title={"mainPage"}></Button>
				<Button onPress={Actions.timeTracker} title={"timeTracker"}></Button>
			</View>
);
}
}

