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
        fontSize: 24,
        fontWeight: 'bold',
        width: 100,
        marginLeft: 20,
    },
    buttonBackground: {
        flex: 0.15,
        alignItems: 'center',
        padding: 10
    },
    saveButton: {
        alignItems: 'center',
        backgroundColor: '#D3D3D3',
        padding: 10,
        width: 120,
        height: 50
    },


    wrapper:{
        flex:1,
    },

    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },

    logoName:{
        color: '#A52A2A',
        fontFamily: 'serif',
        lineHeight: 48,
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 40,
    },

    inputContainer: {
        padding: 20,
        bottom: 60,
    },

    input: {
        position: 'relative',
        height: 50,
        width: 320,
        backgroundColor: '#f6f6f6',
        elevation: 3,
        marginBottom: 20,
        color: '#7e7e7e',
        borderRadius: 12,
        paddingHorizontal: 10,
    },
    inputText:{
        fontSize: 20,
        color: '#2980b9',
        fontWeight: '900',
    },

    signInButtonContainer: {
        backgroundColor: '#191970',
        paddingVertical: 15,
        width: 200,
        left: 50,
        justifyContent: 'center',
    },
    signInButtonText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
    },

    header:{
        flexDirection: 'row',
        backgroundColor: '#90a6da',
        flex: 0.3,
        height: 100,
        padding: 12,
    },

    footerWhite:{
        position: 'absolute',
        flex:0.1,
        left: 0,
        right: 0,
        bottom: -10,
        backgroundColor:'#FFFAFA',
        flexDirection:'row',
        height:80,
        alignItems:'center',
        justifyContent: 'center',

    },

    footerBrown:{
        position: 'absolute',
        flex:0.1,
        left: 0,
        right: 0,
        bottom: -10,
        backgroundColor:'#A52A2A',
        flexDirection:'row',
        height:80,
        alignItems:'center',
        justifyContent: 'center',
    },

    footerPrPol:{
        position: 'absolute',
        top: 11,
        fontSize: 15,
        color: '#191970',
        alignItems:'center',
    },

    newIdeaCorpLog: {
        position: 'absolute',
        fontSize: 12,
        color: '#DCDCDC',
        alignItems:'center',
    },

    taskContainer:{
        flex: 1,
    },

    taskTitle:{
        backgroundColor: '#FFFFFF',
        fontSize: 15,
        left: '7%',
        textAlign: 'center',
        borderRadius: 20,
    },

    timeShow:{
        fontSize: 40,
        left: '22%',
        color: '#FFFFFF',
    }

});