import React, { Component } from 'react'
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import TimelogsContainer from './containers/TimelogsContainer'
import BaseContainer from './containers/BaseContainer'
import LoadingContainer from './containers/LoadingContainer'
import LoginContainer from './containers/LoginContainer'
import EditingTimeContainer from './containers/EditingTimeContainer'
import MainPageContainer from './containers/MainPageContainer'
import AddingTimeTrackerContainer from './containers/AddingTimeTrackerContainer'
import AddingTimeContainer from './containers/AddingTimeContainer'
import TimeTrackerContainer from './containers/TimeTrackerContainer'
import FooterContainer from './containers/FooterContainer'
import styles from './resources/styles'
import {
	Scene,
	Router,
	Actions,
	Reducer,
	ActionConst,
	Overlay,
	Tabs,
	Modal,
	Drawer,
	Stack,
	Lightbox,
} from 'react-native-router-flux';

// this is the root file. Starting page and navigation logic is here.
// Containers are full pages in the app. Components are parts of Containers.

const store = configureStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <Router>
              <Stack key="root">
				  <Scene key="base" component={BaseContainer} title="Base"/>
				  <Scene key="loading" component={LoadingContainer} title="Loading"/>
				  <Scene key="login" component={LoginContainer} title="Login"/>
				  <Scene key="mainPage" component={MainPageContainer} title="MainPage"/>
				  <Scene key="timelogs" component={TimelogsContainer} title="Timelogs"/>
				  <Scene key="footer" component={FooterContainer} title="Footer"/>
				  <Scene key="addingTime" component={AddingTimeContainer} title="AddingTime"/>
				  <Scene key="addingTimeTracker" component={AddingTimeTrackerContainer} title="AddingTimeTracker"/>
				  <Scene key="editingTime" component={EditingTimeContainer} title="EditingTime"/>
				  <Scene key="timeTracker" component={TimeTrackerContainer} title="TimeTracker"/>
              </Stack>
          </Router>
      </Provider>
    )
  }
}
