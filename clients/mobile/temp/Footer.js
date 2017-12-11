import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

import styles from './resources/styles.js'

export default function renderIf(condition, content) {
    if (condition) {
        return content;
    } else {
        return null;
    }
}

let checkContainer = true;
let myTask = 'Task 2.1 Creating mockups';
let time =  '00:00:00';

export default class Footer extends React.Component {
    render() {
        return (
            <View>
                {renderIf(checkContainer,
                    <View style={styles.footerWhite}>
                        <Text style={styles.footerPrPol}>PRIVACY POLICY</Text>
                        <Text style={styles.newIdeaCorpLog}>Newtoidea corp.</Text>
                    </View>
                )}

                {renderIf(!checkContainer,
                    <View style={styles.footerBrown}>
                        <View style={styles.taskContainer}>
                            <Text style={styles.taskTitle}>{myTask}</Text>
                        </View>
                        <View style={styles.taskContainer}>
                            <Text style={styles.timeShow}>{localTime}</Text>
                        </View>
                    </View>
                )}

            </View>
        );
    }
}

