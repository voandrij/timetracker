import React, { Component } from 'react'
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import ProjectsContainer from './containers/ProjectsContainer'
import TasksContainer from './containers/TasksContainer'
import TimelogsContainer from './containers/TimelogsContainer'

const store = configureStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          	<ProjectsContainer />
			<TasksContainer />
			<TimelogsContainer />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
