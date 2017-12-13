import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from '../resources/styles'
//the loading screen for the project



export default class Footer extends React.Component {
    render() {
        return (

			<View style={styles.footerWhite}>
				<Text style={styles.footerPrPol}>PRIVACY POLICY</Text>
				<Text style={styles.newIdeaCorpLog}>Newtoidea corp.</Text>
			</View>

            /*

        Footer to load for different page

          <View style={styles.footerBrown}>
              <View style={styles.taskContainer}>
                  <Text style={styles.taskTitle}>Task 2.1 Creating mockups</Text>
              </View>
              <View style={styles.taskContainer}>
                  <Text style={styles.timeShow}>00:00:00</Text>
              </View>
          </View>        */
        );
    }
}

