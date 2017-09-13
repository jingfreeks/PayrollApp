/*import React, { Component } from 'react';
import {
	AppRegistry,
	View,
	Text,
	styleSheet
} from 'react-native';
import {
	StackNavigator
} from 'react-navigation';
import HomeScreen from '../app/home';

const SimpleApp = StackNavigator({
	Home: { screen: HomeScreen },
	//Chat: { screen: ChatScreen },
});


export default SimpleApp;*/

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
	TabNavigator 
} from 'react-navigation';
import backAndroid, {
  hardwareBackPress,
  exitApp
} from 'react-native-back-android'
import { Container, Content,List, ListItem } from 'native-base';

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

class LoginScreen extends React.Component{
	static navigationOptions=({ navigation }) => ({
		//title: `Login as ${navigation.state.params.user}`,
		title:'Login',
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
	});	
	render(){
		const { params }=this.props.navigation.state;
		return (
			<View style={styles.container}>
				<View style={styles.imagecontainer}>
					<Image
						style={styles.logo}
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
							keyboardType="email-address"
						/>
						<TextInput 
							placeholder="Password"
							returnKeyType="go"
							secureTextEntry={true}
							style={styles.input}
							ref={(input)=> this.passwordInput=input}
						/>	
					</KeyboardAvoidingView>			
				<View style={styles.buttoncontainer}>
					<TouchableOpacity style={styles.buttonlogin}
						onPress={()=> this.props.navigation.navigate('Login', { user: 'Lucy'})}>
						<Text style={styles.buttontext}>Login</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttonregister}
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
class RegisterScreen extends React.Component{
	static navigationOptions=({ navigation }) => ({
		//title: `Login as ${navigation.state.params.user}`,
		tabBarLabel:'Register',
		tabBarIcon: ({ tinColor })=>(
		<Image
        source={require('../src/Image/chats.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
	});	
	render(){
		const { navigate } = this.props.navigation;
		return(
			<View style={styles.container}>
				<Button
					onPress={() => this.props.navigation.navigate('Notifications')}
					title="Go to notifications"
				/>
			</View>
		);
	}	
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Notifications',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../src/Image/chats.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}
const SimpleApp = StackNavigator({
	Home:  { screen: HomeScreen },
	Login: { screen: LoginScreen },
	Register: { screen: RegisterScreen },
});

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
	logo:{
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

const MyApp = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});
AppRegistry.registerComponent('PayrollApp', () => SimpleApp);