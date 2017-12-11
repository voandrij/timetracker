import React from 'react';
import { StyleSheet,
         Text,
         View,
         Image,
         TextInput,
         TouchableOpacity,
         KeyboardAvoidingView,
         AsyncStorage, } from 'react-native';
import { StackNavigator } from "react-navigation";
import styles from './resources/styles.js'

export default class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username: 'Test',
            password: '123',
        }
    }

    componentDidMount(){
        this._loadInitialState().done();
    }

    _loadInitialState = async () => {
        var value = await AsyncStorage.getItem('user');
        if(value !== null){
            this.props.navigation.navigate('Profile');
        }
    }


    render() {
        return (

            <KeyboardAvoidingView behavior = 'padding' style = {styles.wrapper}>

            <View>
                <View style={styles.header}></View>

                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('./resources/img/Logo.png')}
                    />
                    <Text style={styles.logoName}>Time Tracker</Text>

                    <View style={styles.inputContainer}>

                        <Text style={styles.inputText}>LOGIN</Text>
                        <TextInput
                            underlineColorAndroid={'rgba(0,0,0,0)'}
                            placeholderTextColor = 'rgba(255,255,255,0.7)'
                            returnKeyTime = 'next'
                            onSubmitEditing = {() => this.passwordInput.focus()}
                            autoCapitalize='none'
                            autoCorrect = {false}
                            onChangeText={ (username) => this.setState({username}) }
                            style={styles.input}
                        />

                        <Text style={styles.inputText}>PASSWORD</Text>
                        <TextInput
                            underlineColorAndroid={'rgba(0,0,0,0)'}
                            placeholderTextColor = 'rgba(255,255,255,0.7)'
                            returnKeyType = "go"
                            secureTextEntry
                            style={styles.input}
                            /*ref={(input) =>this.passwordInput = input}*/
                            onChangeText={ (password) => this.setState({password}) }
                        ></TextInput>

                        <TouchableOpacity style={styles.signInButonContainer}
                                          onPress={this.login}
                        >
                            <Text style={styles.signInButonText}>Sign in</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

            </KeyboardAvoidingView>
        );
    }

    login = () => {
        fetch('http://192.168.1.104:19001', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        })

            .then((response) => response.json())

            .then((res) => {

                if (res.success === true) {
                    AsyncStorage.setItem('user', res.user);
                    this.props.navigation.navigate('Profile');
                } else {
                    alert(res.message);
                }
            })
            .done();
    }

}