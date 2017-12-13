import React, { Component } from 'react'
import { View, Text, Dimensions} from 'react-native'
import PropTypes from 'prop-types';

export default class Timelogs extends React.Component {
	render() {
		return (
		    <View>
			<View style={styles.containerTimelogs}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex:1.1}}>
                        <View style={styles.activePanelTimelog}>
                            <Text style={styles.activeTitleOption}>Today</Text>
                        </View>
					</View>
                    <View style={styles.panel}>
                        <View style={styles.panelTimelog}>
                            <Text style={styles.titleOption}>Weekly</Text>
                        </View>
                    </View>
                    <View style={styles.panel}>
                        <View style={styles.panelTimelog}>
                            <Text style={styles.titleOption}>Stats</Text>
                        </View>
                    </View>
                    <View style={styles.panel}>
                        <View style={styles.panelTimelog}>
                            <Text style={styles.titleOption}>Filters</Text>
                        </View>
                    </View>
				</View>
            </View>


            <View style={styles.tasksAndTimes}>
				<View style={styles.containerTask}>
                    <View style={{flex: 1.1, flexDirection: 'row', backgroundColor: '#D3D3D3'}}>
                        <View style={styles.timeCell}>
                            <Text style={styles.timeFromTo}>18:30</Text>
                            <Text style={styles.timeFromTo}>20:40</Text>
                        </View>
                        <Text style={styles.taskTitleTimelog}>Add task to Newton Extranet</Text>
                        <View>
                            <Text style={styles.hoursTimelog}>2h 10m</Text>
                            <Text style={styles.projectTitleTimelog}>PROJECT NAME</Text>
                        </View>
                        </View>
                </View>
                <View style={styles.containerTask}>
                    <View style={{flex: 1.1, flexDirection: 'row', backgroundColor: '#D3D3D3'}}>
                        <View style={styles.timeCell}>
                            <Text style={styles.timeFromTo}>18:30</Text>
                            <Text style={styles.timeFromTo}>20:40</Text>
                        </View>
                        <Text style={styles.taskTitleTimelog}>Add task to Newton Extranet</Text>
                        <View>
                            <Text style={styles.hoursTimelog}>2h 10m</Text>
                            <Text style={styles.projectTitleTimelog}>PROJECT NAME</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.containerTask}>
                    <View style={{flex: 1.1, flexDirection: 'row', backgroundColor: '#D3D3D3'}}>
                        <View style={styles.timeCell}>
                            <Text style={styles.timeFromTo}>18:30</Text>
                            <Text style={styles.timeFromTo}>20:40</Text>
                        </View>
                        <Text style={styles.taskTitleTimelog}>Add task to Newton Extranet</Text>
                        <View>
                            <Text style={styles.hoursTimelog}>2h 10m</Text>
                            <Text style={styles.projectTitleTimelog}>PROJECT NAME</Text>
                        </View>
                    </View>
                </View>

                    <Text style={styles.totalTime}>Total TI:ME</Text>
                    {/*<Text style={styles.totalTime}> </Text>*/}


            </View>
            </View>
		)
	}
}

Timelogs.propTypes = {
	timelogs: PropTypes.array.isRequired
}
