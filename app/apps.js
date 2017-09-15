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
import React, { Component } from 'react';

import { 
	StackNavigator,
} from 'react-navigation';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';

export default class PayrollApp extends Component {
	render(){
		//const { navigate } = this.props.navigation;
		return(
			<Container>
			
				<Header>
					<Title>Welcome</Title>
				</Header>
				
				<Content>
					<Text></Text>
				</Content>
				<Footer>
				
				</Footer>
			</Container>
		);
	}	
}
AppRegistry.registerComponent('PayrollApp', () => SimpleApp);

/*import { DrawerNavigator } from "react-navigation";
import HomeScreen from "../app/home";
import LoginScreen from "../app/logins";
import RegisterScreen from "../app/register";
import MainMenuScreen from "../app/mainmenu";

const HomeScreenRouter = DrawerNavigator(
  {
    Transaction: { screen: HomeScreen },
    Settings: { screen: LoginScreen },
    Reports: { screen: HomeScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);	
export default HomeScreenRouter;*/
//AppRegistry.registerComponent('PayrollApp', () => SimpleApp);