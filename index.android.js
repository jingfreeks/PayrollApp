/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 
 import './app/home';
/*import {
	AppRegistry,
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	Image,
	TextInput,
	KeyboardAvoidingView,
	Alert,
	StatusBar,
	Navigator,
} from 'react-native';
import React, { Component } from 'react';

import HomeScreen from "./app/home";
import LoginScreen from "./app/logins";
import RegisterScreen from "./app/register";
import MainMenuScreen from "./app/mainmenu";


class PayrollApp extends Component{
	renderScene(route, navigator){
		if(route.name=='HomeScreen'){
			return <HomeScreen navigator={navigator} />
		}
		if(route.name=='LoginScreen'){
			return <LoginScreen navigator={navigator} />
		}
		if(route.name=='RegisterScreen'){
			return <RegisterScreen navigator={navigator} />
		}	
		if(route.name=='MainMenuScreen'){
			return <MainMenuScreen navigator={navigator} />
		}			
	}
	render(){
		return(
			<Navigator
				initialRoute={{name: 'root'}}
				renderScene={this.renderScene.bind(this)}
			/>
		);
	}
}*/

//import { DrawerNavigator } from "react-navigation";
//import HomeScreen from './app/home';
//import MainMenuScreen from "./app/mainmenu";



/*import React from 'react';
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

class MainMenuScreen extends React.Component{
	static navigationOptions = {
		drawerLabel: 'Home',
		drawerIcon: ({ tintColor }) => (
		  <Image
			source={require('./src/Image/chats.png')}
			style={[styles.icon, {tintColor: tintColor}]}
		  />
		),
	  };
  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('DrawerOpen')}
		//this.props.navigation.navigate('DrawerOpen');
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./src/Image/chats.png')}
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

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const MyApp = DrawerNavigator({
  Home: {
    screen: MainMenuScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});
export default MainMenuScreen;

AppRegistry.registerComponent('PayrollApp', () => MyApp);*/



/*const SimpleApp = StackNavigator({
	Home:  { screen: HomeScreen },
	Login: { screen: LoginScreen },
	Register: { screen: RegisterScreen },
	MainMenu: { screen: MainMenuScreen },
});*/

/*export default class PayrollApp extends Component {
	
	render(){
		//const { navigate } = this.props.navigation;
		return(
			<Container>
			
				<Header style={{backgroundColor:'#f1c40f'}}>
					<Left>
						<Button 
							transparent >
							<Icon name='menu' />					
							Back	
						</Button>
					</Left>
						<Body style={{justifyContent: 'center',flex: 1}}>
							<Title style={{textAlign: 'center',justifyContent: 'center'}}>Welcome</Title>	
						</Body>
					<Right />
				</Header>
				
				<Content>
					<Text>Testing</Text>
				</Content>
			</Container>
		);
	}*/
	
	/*constructor(){
		super();
		this.state ={
			isReady: false 
		};
	}
	
	async componentWillMount(){
		await Expo.Font.loadAsync({
			Roboto: require("native-base/Fonts/Roboto.ttf"),
			Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
			Ionicons: require("native-base/Fonts/Ionicons.ttf")			
		});
		this.setState({ isReady: true });
	}
	
	render(){
		if(!this.state.isReady){
			return <Expo.Apploading />;
		}
		return <HomeScreen />;
	}
}*/


//AppRegistry.registerComponent('PayrollApp', () => PayrollApp);
/*export default class PayrollApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});*/

//AppRegistry.registerComponent('PayrollApp', () => MyApp);
