import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import 'react-native-gesture-handler';
import LogOut from './LogOut';

const Auth = createStackNavigator({
  
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: {
      title: 'Register',
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerShown: false,
    },
  },
});

const App = createSwitchNavigator({ 
  SplashScreen: {
   
    screen: SplashScreen,
    navigationOptions: {
      
      headerShown: false,
      backgroundColor:'#181920'
    },
  },
  Auth: {
   
    screen: Auth,
  },
  WelcomePage: {
   
    // screen:Signin_page,
    // navigationOptions: {
      
    //   headerShown: false,
    // },
    screen:LogOut,
    navigationOptions:{
      headerShown: false,

    }
  },
});


export default createAppContainer(App);
  
  