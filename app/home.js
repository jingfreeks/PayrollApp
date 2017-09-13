import React from 'react';
import {
	AppRegistry,
	Text,
	View,
	Button,
	StyleSheet,
	TouchableOpacity,
	Image,
	TextInput,
	KeyboardAvoidingView,
	Alert,
	StatusBar,
} from 'react-native';

class HomeScreen extends React.Component {
	static navigationOptions={
		title: 'Welcome',
		headerStyle:{ 
			backgroundColor: '#2980b9',
			justifyContent: 'center',
		},
		headerTitleStyle:{ 
			fontSize: 25,
			fontWeight: 'bold',
			textAlign: 'center',
			alignSelf:'center',
			color:'#ecf0f1'
		},
	};
	render(){
		const { navigate } = this.props.navigation;
		return(
			<View style={styles.container}>
				<View style={styles.imagecontainer}>
					<Image
						style={styles.logo}
						source ={require('../src/Image/bakery.png')}
					/>			
					<Text style={styles.subtitle}>Welcome to our Mobile Payrol System</Text>
				</View>
				<View style={styles.buttoncontainer}>
					<TouchableOpacity style={styles.buttonlogin}
						onPress={()=> this.props.navigation.navigate('Login', { user: 'Lucy'})}>
						<Text style={styles.buttontext}>Login</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttonregister}
						onPress={()=> this.props.navigation.navigate('Register', { user: 'Lucy'})}>
						<Text style={styles.buttontext}>Register</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}	
}
const styles=StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: '#3498db',

	},
	subtitle:{
		fontSize:24,
		fontWeight:'200',
		color: 'white',
	},
	buttoncontainer:{
		padding:20,
	},
	buttonlogin:{
		backgroundColor: '#2980b9',
		height: 80,
		marginBottom:20,
		marginLeft:10,
		marginRight:10,
	},
	buttonregister:{
		backgroundColor: '#2980b9',
		height: 80,
		marginBottom:20,
		marginLeft:10,
		marginRight:10,
	},
	buttonregisterinfo:{
		backgroundColor: '#2980b9',
		height: 80,
		marginLeft:10,
		marginRight:10,		
	},
	buttontext:{
		fontSize:25,
		fontWeight: 'bold',
		textAlign: 'center',
		justifyContent: 'center',
		color: 'white',
		padding: 10,
		marginTop:10,
	},
	imagecontainer:{
		alignItems: 'center',
		justifyContent: 'center',
		flexGrow: 1,		
	},
	imagecontainerregister:{
		alignItems: 'center',
		justifyContent: 'center',	
	},
	logo:{
		width: 150,
		height: 150,
	},
	logoregister:{
		width: 150,
		height: 150,		
	},
	input:{
		height: 50,
		backgroundColor: '#ecf0f1',
		marginBottom: 10,
		fontSize:25,
		marginLeft: 30,
		marginRight: 30,
	},
	icon: {
		width: 26,
		height: 26,
	  },
});
export default HomeScreen;