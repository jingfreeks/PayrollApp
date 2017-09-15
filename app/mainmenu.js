import React from 'react';
import {
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
} from 'react-native';

import { 
	StackNavigator,
} from 'react-navigation';
import backAndroid, {
  hardwareBackPress,
  exitApp
} from 'react-native-back-android'
import { Container, Content, List, ListItem, Button } from "native-base";
import { DrawerNavigator } from "react-navigation";

/*import HomeScreen from "../app/home";
import LoginScreen from "../app/logins";
import RegisterScreen from "../app/register";
import HomeScreenRouter from '../app/apps';*/

const routes =["Transaction","Settings","Reports"];


class MainMenuScreen extends React.Component{
	render() {
    return (
      <Container>
        <Button>
          <Text>
            Button
          </Text>
        </Button>
      </Container>
    );
  }
	/*static navigationOptions =({ navigation }) => ({
		title:'Main Menu',
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
		drawerLabel: 'Home',
		drawerIcon: ({ tintColor }) => (
		  <Image
			source={require('../src/Image/chats.png')}
			style={[styles.icon, {tintColor: tintColor}]}
		  />
		),
	});	
  render() {
	const { navigate } = this.props.navigation;  
	return (
		<View>
			<TouchableOpacity style={styles.buttonlogin}
				
				onPress={()=> this.props.navigation.navigate('Notifications', { user: 'Lucy'})}>
				<Text style={styles.buttontext}>Register</Text>
					
			</TouchableOpacity>
		</View>
    );
  }*/
}

/*class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
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
});*/
export default MainMenuScreen;
AppRegistry.registerComponent('PayrollApp', () => MyApp);