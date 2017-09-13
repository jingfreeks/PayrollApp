import React, { Component } from 'react';
import {
	AppRegistry,
	Text,
	StyleSheet,
	View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends Component {
	static navigationOptions = {
		title: 'Welcome',
	};
	render(){
		const { navigate } = this.props.navigation;
		return(
			<View>
				<Text>Hello, Chat App!</Text>
				<Button 
				 onPress={()=> navigate('Chat')}
				 title="Chat with Lucy"
				/>
			</View>
		);
	}
}

class ChatScreen extends React.Component{
	static navigationOptions = {
		title: 'Chat with Lucy',
	};
	render(){
		return (
			<View>
				<Text>Chat with Lucy</Text>
			</View>
		);
	}
}
AppRegistry.registerComponent('SimpleApp', () => HomeScreen);