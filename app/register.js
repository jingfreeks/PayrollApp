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

import { 
	StackNavigator,
} from 'react-navigation';
import backAndroid, {
  hardwareBackPress,
  exitApp
} from 'react-native-back-android'
import { Container, Content, List, ListItem } from "native-base";
import { DrawerNavigator } from "react-navigation";

class RegisterScreen extends React.Component{
	
	constructor(props){
		super(props)
		
		this.state = {
			
			TextInputEmail: '',
			TextInputName: '',
			TextInputPassword: '',
			TextInputPassword1: ''
		}
	}
	
	InsertDataToServer = () => {
		
		const{ TextInputEmail } = this.state;
		const{ TextInputName } = this.state;
		const{ TextInputPassword } = this.state;
		const{ TextInputPassword1 } = this.state;
		
		fetch('./php/submit_register.php', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'		
			},
			body: JSON.stringify({
				email_: TextInputEmail,
				name_: TextInputName,
				password_: TextInputPassword,
				password1_: TextInputPassword1
			})
		}).then((response)=> response.json())
			.then((responseJson)=> {
				Alert.alert(responseJson);		
			}).catch((error)=>{
				console.error(error);	
			});
	}
	static navigationOptions=({ navigation }) => ({
		//title: `Login as ${navigation.state.params.user}`,
		title:'Register',
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
		const { navigate } = this.props.navigation;
		return(
			<View style={styles.container}>
				<View style={styles.imagecontainerregister}>
					<Image
						style={styles.logoregister}
						source ={require('../src/Image/bakery.png')}
					/>			
					<Text style={styles.subtitle}>Welcome to our Mobile Payrol System</Text>
				</View>
				<KeyboardAvoidingView behavior="padding" style={styles.container}>
					<TextInput 
						placeholder="Username or Email"
						returnKeyType="next"
						style={styles.input}
						onSubmitEditing={() => this.passwordInput.focus()}
						onChangeText={ TextInputEmail => this.setState({TextInputEmail})}
						underlineColorAndroid = 'transparent'
						keyboardType="email-address"
					/>
					<TextInput 
						placeholder="Full Name"
						returnKeyType="next"
						style={styles.input}
						onSubmitEditing={() => this.passwordInput.focus()}
						onChangeText={ TextInputName => this.setState({TextInputName})}
						underlineColorAndroid = 'transparent'
						keyboardType="default"
					/>
										
					<TextInput 
						placeholder="Password"
						returnKeyType="go"
						secureTextEntry={true}
						style={styles.input}
						ref={(input)=> this.passwordInput=input}
						onChangeText={ TextInputPassword => this.setState({TextInputPassword})}
						underlineColorAndroid = 'transparent'
					/>	
					<TextInput 
						placeholder="Confirm-Password"
						returnKeyType="go"
						secureTextEntry={true}
						style={styles.input}
						ref={(input)=> this.passwordInput=input}
						onChangeText={ TextInputPassword1 => this.setState({TextInputPassword1})}
						underlineColorAndroid = 'transparent'
					/>	
				</KeyboardAvoidingView>	
				<View style={styles.buttoncontainer}>
				
					<TouchableOpacity style={styles.buttonlogin}
		
						onPress={this.InsertDataToServer} color='#2196F3' >
						
						<Text style={styles.buttontext}>Register</Text>
						
					</TouchableOpacity>
					
					<TouchableOpacity style={styles.buttonregisterinfo}
						  onPress ={() => {
							const { goBack } = this.props.navigation
							Alert.alert(
							  'Going Back',
							  'Want to go back?',
							  [
								{
								  text: 'Cancel',
								  onPress: () => console.log('Cancel Pressed'),
								  style: 'cancel'
								},
								{ text: 'OK', onPress: () => exitApp() }
							  ],
							  { cancelable: false }
							);
							// return true to stop bubbling
							return true
						  }}>
						<Text style={styles.buttontext}>Exit</Text>
					</TouchableOpacity>
				</View>	
			</View>
		);
	}	
}
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
export default RegisterScreen;