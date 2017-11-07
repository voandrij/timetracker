import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './store/store.js';
import MainContainer from './containers/MainContainer.js';
import TasksContainer from './containers/TasksContainer.js';
import TimelogsContainer from './containers/TimelogsContainer.js';

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <MainContainer/>
				<TasksContainer/>
				<TimelogsContainer/>
            </View>
        </Provider>
    );
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
