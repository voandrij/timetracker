import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    AsyncStorage} from 'react-native';
import { StackNavigator } from "react-navigation";
import Projects from '../components/Projects';
import styles from '../resources/styles'

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    componentDidMount() {
        this._loadInitialState().done();
    }

    _loadInitialState = async () => {

        let value = await AsyncStorage.getItem('user');
        if (value !== null) {
            /*this.props.navigation.navigate('Projects');*/
            this.props.StackNavigator.navigate('Projects');
        }

    }

    render() {
        return (
			<KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

				<View>
					<View style={styles.header}></View>

					<View style={styles.logoContainer}>
						<Image
							style={styles.logo}
							source={require('../resources/img/Logo.png')}
						/>
						<Text style={styles.logoName}>Time Tracker</Text>

						<View style={styles.inputContainer}>

							<Text style={styles.inputText}>LOGIN</Text>
							<TextInput
								underlineColorAndroid={'rgba(0,0,0,0)'}
								placeholderTextColor='rgba(255,255,255,0.7)'
								returnKeyTime='next'
								onSubmitEditing={() => this.passwordInput.focus()}
								autoCapitalize='none'
								autoCorrect={false}
								onChangeText={(username) => this.setState({username})}
								style={styles.input}
							/>

							<Text style={styles.inputText}>PASSWORD</Text>
							<TextInput
								underlineColorAndroid={'rgba(0,0,0,0)'}
								placeholderTextColor='rgba(255,255,255,0.7)'
								returnKeyType="go"
								secureTextEntry
								style={styles.input}
								onChangeText={(password) => this.setState({password})}
							></TextInput>

							<TouchableOpacity style={styles.signInButtonContainer}
											  onPress={this.login()}
							>
								<Text style={styles.signInButtonText}>Sign in</Text>
							</TouchableOpacity>
						</View>

					</View>
				</View>

			</KeyboardAvoidingView>

        );
    }

    login = () => {

        fetch('http://192.168.1.100', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password,
                }),
            }
        )
            .then((response) => response.json())
            .then((res) => {

                if(res.username === ''){
                    alert("You forgot to add username!");
                }
                else if(res.password === ''){
                    alert("You forgot to add password!");
                }

                else if (res.success === true) {
                    AsyncStorage.setItem('user', res.user);
                    /*this.props.navigation.navigate('Projects');*/
                    this.props.StackNavigator.navigate('Projects');
                } else {
                    alert(res.message)
                }

            })

            .done();
    }

}
