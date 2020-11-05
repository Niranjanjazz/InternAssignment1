
import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { Fontisto } from '@expo/vector-icons';
import { Shake } from "react-native-motion";





import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';





const LoginScreen = (props) => {
    
  let [userEmail, setUserEmail] = useState('');
  let [userPassword, setUserPassword] = useState('');
  let [loading, setLoading] = useState(false);
  let [errortext, setErrortext] = useState('');
  let [erroremailtext, setEmailErrortext] = useState('');
  let [pwerrortext, setPwErrortext] = useState('');

  const handleSubmitPress = () => {
    setErrortext('');
    setEmailErrortext('');
    setPwErrortext('');
 
    if (!userEmail) {
       
      setEmailErrortext('Email field is empty');
      console.log('Email field is empty');
      
       }
    if (!userPassword) {
      setPwErrortext('Password field is empty');
      console.log('Password field is empty');
    
      
        return;
    }
    setLoading(true);
    var dataToSend = { email: userEmail,password: userPassword };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('http://54.166.162.39:3000/users/login', {
      method: 'POST',
      body: JSON.stringify(dataToSend),
      headers: {
    'Accept': 'application/json, text/plain, */*',  
    'Content-Type': 'application/json'
  },
     
    }).then(response => response.json())
      .then(responseJson => {
        
        setLoading(false);
        console.log(responseJson);
      
        if (responseJson.success == 1) {
          AsyncStorage.setItem('username',responseJson.data['username']);
           AsyncStorage.setItem('email',responseJson.data['email']);
           AsyncStorage.setItem('age',responseJson.data['age']);
           AsyncStorage.setItem('phone',responseJson.data['phone']);
          props.navigation.navigate('WelcomePage');
        } else {
          setErrortext('Invalid email id or password');
          console.log('Invalid email id or password');
          
        }
      })
      .catch(error => {
        
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
       
      <Animatable.View animation="bounceInDown" style={styles.CircleShapeView}>
      <Text></Text>
      <Text></Text>
       <Fontisto name="person" size={24}  style={styles.logo}  />
      </Animatable.View>
   <Text></Text>
      
      
          <Animatable.View animation="bounceInRight" style={styles.shadowContainerStyle} >
          
              <TextInput
                style={styles.inputText}
                onChangeText={UserEmail => setUserEmail(UserEmail)}
               
                placeholder="Enter Email" 
                placeholderTextColor="#ada9b1"
                autoCapitalize="none"
                keyboardType="email-address"
               
                returnKeyType="next"
                blurOnSubmit={false}
              />
               
              </Animatable.View>
           
              {erroremailtext != '' ? (
                
              <Text style={styles.errorTextStyle}> {erroremailtext} </Text>
            ) : null}
              
            
              <Animatable.View animation="bounceInLeft" style={styles.shadowContainerStyle} >
              <TextInput
                  style={styles.inputText}
                onChangeText={UserPassword => setUserPassword(UserPassword)}
                
                placeholder="Enter Password" 
                placeholderTextColor="#ada9b1"
                keyboardType="default"
                
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
              />
            </Animatable.View>
            
             {pwerrortext != '' ? (
              <Text style={styles.errorTextStyle}> {pwerrortext} </Text>
            ) : null}
             {errortext != '' ? (
              <Text style={styles.errorTextStyle}> {errortext} </Text>
            ) : null}
            <TouchableOpacity
             style={styles.loginBtn }
             
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() => props.navigation.navigate('RegisterScreen')}>
              Not a member ? Register here
            </Text>
        
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181920',
        alignItems: 'center',
        justifyContent: 'center',
      },
      logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"#465881",
        marginBottom:40,
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputView:{
        width:"80%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20,
        shadowColor: '#ffffff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        
      },
      shadowContainerStyle: {   
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#221e2f',
        borderBottomWidth: 4,
        shadowColor: '#181920',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 3,
        width:"80%",
        backgroundColor:"#181920",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20,
      },
      inputText:{
        height:50,
        color:"white"
      },
      forgot:{
        color:"white",
        fontSize:11
      },
      loginBtn:{
        width:"80%",
        backgroundColor:"#292f8d",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10,
        elevation:10
        
        
      },
      loginText:{
        color:"white"
      },
      CircleShapeView: {
        width: 100,
        height: 100,
        borderRadius: 100/2,
        borderColor:'#221e2f',
        backgroundColor: '#181920',
        alignItems:"center",
        justifyContent:"center",
        borderWidth:3
    },

    
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'white',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});