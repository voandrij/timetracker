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
	}

});