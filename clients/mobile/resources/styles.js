import { StyleSheet} from 'react-native'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    adderEditor: {
        flex: 0.45,
    },
    baseText: {
        fontSize: 16,
        marginLeft: 20,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    picker: {
        backgroundColor: '#D3D3D3',
        width: 100,
        marginLeft: 20,
    },
    grayBackground: {
        flex: 0.3,
        backgroundColor: '#D3D3D3',
    },
    totalTime: {
        backgroundColor: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 15,
        marginRight: 20,
        textAlign: 'right',
    },
    buttonBackground: {
        flex: 0.15,
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10
    },
    saveButton: {
        alignItems: 'center',
        backgroundColor: '#D3D3D3',
        padding: 10,
        width: 120,
        height: 50
    },

    panel: {
       flex: 1.1,
    },
    panelTimelog: {
        backgroundColor: '#fff',
        borderWidth:0.1,
        height: 30,
        // paddingTop: 50
    },
    activePanelTimelog: {
        backgroundColor: '#c0c0c0',
        borderWidth:0.1,
        height: 30
        // marginTop: 50
    },
    titleOption: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        // marginLeft: 20,
    },
    activeTitleOption: {
        fontSize: 20,
        fontWeight: 'bold',
        // marginLeft: 20,
        color: 'white',
        textAlign: 'center'
    },
    containerTask: {
        backgroundColor: '#D3D3D3',
        width: 360,
        height: 70,
        marginLeft: 10,
        marginTop:12,
        // flex: 1,
        // flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    timeFromTo: {
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: 'white',
        textAlign: 'center',

    },
    timeCell: {
        width: 60,
        marginTop: 10,
        marginLeft: 8,
    },
    containerTimelogs: {
        flex: 1,
        flexDirection: 'column'
    },
    hoursTimelog: {
        paddingTop: 8,
        textAlign: 'right',
        fontSize: 28,
    },
    projectTitleTimelog: {
        paddingTop: 5,
    },
    taskTitleTimelog: {
        fontSize: 12,
        width: 160,
        paddingTop: 14,
        paddingLeft: 10
    },
    tasksAndTimes: {
        paddingTop: 40,
    },
});
