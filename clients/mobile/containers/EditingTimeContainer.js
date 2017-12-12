import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Picker, Button} from 'react-native'
import styles from '../resources/styles'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchProjects } from '../actions/projects'
import { fetchTasks } from '../actions/tasks'
import Loading from '../components/Loading'
import DateTimePicker from 'react-native-modal-datetime-picker';

class EditingTimeContainer extends React.Component {

	constructor(props) {
		super(props)
		this.handleRefreshClick = this.handleRefreshClick.bind(this)
	}

	componentDidMount() {
		const { dispatch } = this.props
		dispatch(fetchProjects())
		dispatch(fetchTasks())
	}

	handleRefreshClick(e) {
		e.preventDefault()
		const { dispatch} = this.props
		dispatch(fetchProjects())
		dispatch(fetchTasks())
	}

	state = {
		isStartDateTimePickerVisible: false,
		isEndDateTimePickerVisible: false,
		startDate: new Date(2017, 12, 12, 1, 1),
		endDate: new Date(2017, 12, 12, 11, 11),
		difference: new Date(2017, 12, 12, 10, 10)
	};

	_showStartDateTimePicker = () => this.setState({ isStartDateTimePickerVisible: true });

	_hideStartDateTimePicker = () => this.setState({ isStartDateTimePickerVisible: false });

	_showEndDateTimePicker = () => this.setState({ isEndDateTimePickerVisible: true });

	_hideEndDateTimePicker = () => this.setState({ isEndDateTimePickerVisible: false });


	_handleStartDatePicked = (date) => {
		console.log('A date has been picked: ', date);
		if(date<this.state.endDate) {
			this.setState({startDate: date});
			this._updateDifference();
		}
		this._hideStartDateTimePicker();
	};

	_handleEndDatePicked = (date) => {
		console.log('A date has been picked: ', date);
		if(date>this.state.startDate) {
			this.setState({endDate: date});
			this._updateDifference();
		}
		this._hideEndDateTimePicker();
	};

	_updateDifference = () => {
		this.setState({difference: new Date(2017, 11, 11,
			(this.state.endDate.getHours()-this.state.startDate.getHours()),
			(this.state.endDate.getMinutes()-this.state.startDate.getMinutes()))})
	}

	projectPicks= () => (
		this.props.projects.map((project) => (
			<Picker.Item label={project.name} value={project.id} key={project.id}/>
		))
	)

	taskPicks= () => (
		this.props.tasks.map((task) => (
			<Picker.Item label={task.name} value={task.id} key={task.id}/>
		))
	)


	render() {
		const { projects, tasks, isFetching} = this.props
		return (
			<View style={{flex: 1}}>
				{isFetching && <Loading/> }
				{!isFetching && projects.length === 0 && <Text>No projects found.</Text> }
				{!isFetching && tasks.length === 0 && <Text>No tasks</Text> }
				{projects.length > 0 && tasks.length > 0 &&
				<View style={{flex: 1}}>
					<View style={styles.adderEditor}>
						<Text style={styles.titleText}>Project</Text>
						<Picker style={styles.picker}
								selectedValue={this.state.project}
								onValueChange={(itemValue, itemIndex) => this.setState({project: itemValue})}>
							{
								this.projectPicks()
							}
						</Picker>
						<Text style={styles.titleText}>Task</Text>
						<Picker style={styles.picker}
								selectedValue={this.state.taskValue}
								onValueChange={(itemValue, itemIndex) => this.setState({taskValue: itemValue})}>
							{
								this.taskPicks()
							}
						</Picker>
						<Text style={styles.titleText}>Status</Text>
						<Picker style={styles.picker}
								selectedValue={this.state.status}
								onValueChange={(itemValue, itemIndex) => this.setState({status: itemValue})}>
							<Picker.Item label="Status1" value="status1"/>
							<Picker.Item label="Status2" value="status2"/>
						</Picker>
						<Text style={styles.titleText}>Started at</Text>


						<TouchableOpacity
							onPress={this._showStartDateTimePicker}>
							<Text style={styles.baseText}>
								{this.state.startDate.getHours()+'h '+this.state.startDate.getMinutes()+'m'}
							</Text>
						</TouchableOpacity>
						<DateTimePicker
							isVisible={this.state.isStartDateTimePickerVisible}
							onConfirm={this._handleStartDatePicked}
							onCancel={this._hideStartDateTimePicker}
							mode='time'
						/>
					</View>

					<View style={styles.grayBackground}>
						<Text style={styles.titleText}>Logged hours</Text>
						<Text style={styles.totalTime}>
							{this.state.difference.getHours()+'h '+this.state.difference.getMinutes()+'m'}
						</Text>

						<Text style={styles.titleText}>Finished at</Text>


						<TouchableOpacity
							onPress={this._showEndDateTimePicker}>
							<Text style={styles.baseText}>
								{this.state.endDate.getHours()+'h '+this.state.endDate.getMinutes()+'m'}
							</Text>
						</TouchableOpacity>
						<DateTimePicker
							isVisible={this.state.isEndDateTimePickerVisible}
							onConfirm={this._handleEndDatePicked}
							onCancel={this._hideEndDateTimePicker}
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
				}
			</View>
		)
	}
}

EditingTimeContainer.propTypes = {
	projects: PropTypes.array.isRequired,
	tasks: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired,
	dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
	const { projectsReducer, tasksReducer } = state
	const {
		isFetching,
		items: projects
	} = projectsReducer || {
		isFetching: true,
		items: []
	}
	const {
		items: tasks
	} = tasksReducer || {
		isFetching: true,
		items: []
	}
	return {
		projects,
		tasks,
		isFetching
	}
}

export default connect(mapStateToProps)(EditingTimeContainer)
