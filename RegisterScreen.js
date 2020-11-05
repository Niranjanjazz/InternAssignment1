
import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { MaterialIcons } from '@expo/vector-icons';

import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';



const RegisterScreen = props => {
  let [userName, setUserName] = useState('');
  let [userEmail, setUserEmail] = useState('');
  let [userAge, setUserAge] = useState('');
  let [userAddress, setUserAddress] = useState('');
  let [loading, setLoading] = useState(false);
  let [errortext, setErrortext] = useState('');
  let [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);
  let [nameerrortext, setNameErrortext] = useState('');
  let [emailerrortext, setEmailErrortext] = useState('');
  let [ageerrortext, setAgeErrortext] = useState('');
  let [phoneerrortext, setPhoneErrortext] = useState('');

  const handleSubmitButton = () => {
    setErrortext('');
    setNameErrortext('');
    setEmailErrortext('');
    setAgeErrortext('');
    setPhoneErrortext('');
    if (!userName) {
      setNameErrortext('Name field is empty');
      console.log('Name field is empty');
     
      
    }
    if (!userEmail) {
      setEmailErrortext('Email field is empty');
      console.log('Email field is empty');
     
    }
    if (!userAge) {
      setAgeErrortext('Age field is empty');
      console.log('Age field is empty');
     
    }
    if (!userAddress) {
      setPhoneErrortext('Phone No field is empty');
      console.log('Phone NO field is empty');
      return;
    }
 
    setLoading(true);
    var dataToSend = {
      username: userName,
      email: userEmail,
      phone: userAddress,
      age: userAge,
      
    };
    

    fetch('http://54.166.162.39:3000/users/register', {
      method: 'POST',
      body: JSON.stringify(dataToSend) ,
      headers: {
        'Accept': 'application/json, text/plain, */*',  
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        
        setLoading(false);
        console.log(responseJson);
        if (responseJson.success == 1) {
          setIsRegistraionSuccess(true);
          console.log('Registration Successful. Please Login to proceed');
        } else {
          setErrortext('Registration Unsuccessful');
        }
      })
      .catch(error => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };
  if (isRegistraionSuccess) {
    return (
      <View style={styles.container}>
        
        <Text style={styles.successTextStyle}>Registration Successful.</Text>
        <TouchableOpacity
          style={styles.loginBtn}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.container}>
   
      
       
        <Animatable.View animation="bounceInDown">
       <MaterialIcons name="person-add" size={24} color="white"  style={styles.logo}  />
        
        </Animatable.View>
        <Animatable.View animation="bounceInLeft" elevation={5} style={[styles.shadowContainerStyle]} >
            <TextInput
             style={styles.inputText}
              onChangeText={UserName => setUserName(UserName)}
              placeholder="Enter Name"
              placeholderTextColor="#ada9b1"
              autoCapitalize="sentences"
              returnKeyType="next"
             
              blurOnSubmit={false}
            />
            </Animatable.View>
            {nameerrortext != '' ? (
                
                <Text style={styles.errorTextStyle}> {nameerrortext} </Text>
              ) : null}
            <Animatable.View animation="bounceInRight" style={[styles.shadowContainerStyle]} >
            <TextInput
              style={styles.inputText}
              onChangeText={UserEmail => setUserEmail(UserEmail)}
              placeholder="Enter Email"
              placeholderTextColor="#ada9b1"
              keyboardType="email-address"
              returnKeyType="next"
              blurOnSubmit={false}
            />
           </Animatable.View>
           {emailerrortext != '' ? (
                
                <Text style={styles.errorTextStyle}> {emailerrortext} </Text>
              ) : null}
           <Animatable.View animation="bounceInLeft" elevation={5} style={[styles.shadowContainerStyle]} >
            <TextInput
              style={styles.inputText}
              onChangeText={UserAge => setUserAge(UserAge)}
              placeholder="Enter Age"
              placeholderTextColor="#ada9b1"
              keyboardType="numeric"
              blurOnSubmit={false}
            />
          </Animatable.View>
          {ageerrortext != '' ? (
                
                <Text style={styles.errorTextStyle}> {ageerrortext} </Text>
              ) : null}
          <Animatable.View animation="bounceInRight" style={[styles.shadowContainerStyle]} >
            <TextInput
              style={styles.inputText}
              onChangeText={UserAddress => setUserAddress(UserAddress)}
              placeholder="Enter Phone no"
              placeholderTextColor="#ada9b1"
              autoCapitalize="sentences"
              keyboardType="numeric"
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
         </Animatable.View>
         {phoneerrortext != '' ? (
                
                <Text style={styles.errorTextStyle}> {phoneerrortext} </Text>
              ) : null}
          {errortext != '' ? (
            <Text style={styles.errorTextStyle}> {errortext} </Text>
          ) : null}
          <TouchableOpacity
            style={styles.loginBtn}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
      
     
    </View>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
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
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: '#ada9b1',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },

  container: {
    flex: 1,
    backgroundColor: '#181920',
    alignItems: 'center',
    justifyContent: 'center',
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
  logo:{
    fontWeight:"normal",
    fontSize:50,
    color:"#465881",
    marginBottom:40,
    
    
    
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
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
    marginBottom:10
  },
  loginText:{
    color:"black"
  }
});