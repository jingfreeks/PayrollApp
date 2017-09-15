import React, { Component } from 'react';
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
import { Container, Content, List, ListItem } from "native-base";
import { DrawerNavigator } from "react-navigation";
import LoginScreen from "../app/logins";
import RegisterScreen from "../app/register";
import MainMenuScreen from "../app/mainmenu";
import {
	StackNavigator
} from 'react-navigation'


class HomeScreen extends Component {
	static navigationOptions=({ navigation }) => ({
		//title: `Login as ${navigation.state.params.user}`,
		title:'Welcome',
		headerStyle:{ 
			backgroundColor: '#2ecc71',
			justifyContent: 'center',
		},	
		headerTitleStyle:{ 
			fontSize: 25,
			fontWeight: 'bold',
			textAlign: 'center',
			alignSelf:'center',
			color:'#ecf0f1'
		},		
	});
	
	render(){
		const { navigate }=this.props.navigation;
			return (
			<View style={styles.container}>
				<View style={styles.imagecontainer}>
					<Image
						style={styles.logo}
						source ={require('../src/Image/binhi-logo.jpg')}
					/>			
					<Text style={styles.subtitle}>Welcome to our Mobile Payrol System</Text>
				</View>
				<View style={styles.buttoncontainer}>
					<TouchableOpacity style={styles.buttonlogin}
						onPress={()=> navigate('Login', { user: 'Lucy'})}>
						<Text style={styles.buttontext}>Login</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttonregister}
						onPress={()=> navigate('Register', { user: 'Lucy'})}>
						<Text style={styles.buttontext}>Register</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}	
}
const SimpleApp = StackNavigator({
	Home:  { screen: HomeScreen },
	Login: { screen: LoginScreen },
	Register: { screen: RegisterScreen },
	MainMenu: { screen: MainMenuScreen },
});

const styles=StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: '#f1c40f',

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
		width: 350,
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
AppRegistry.registerComponent('PayrollApp', () => SimpleApp);