
import React, { useState ,useEffect} from 'react';
import * as Animatable from 'react-native-animatable';
import FlipCard from 'react-native-flip-card';
import { Ionicons,FontAwesome,MaterialIcons,Entypo  } from '@expo/vector-icons';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Card} from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage';

const LogOut = (props) => {
    
    const [username,setUser]=useState();
    const [age,setAge]=useState();
    const [email,setEmail]=useState();
    const [phone,setPhone]=useState();
         
          let key=["username","age","email","phone"]
          AsyncStorage.multiGet(key).then(value=>{
           setUser(value[0][1]);
           setAge(value[1][1]);
           setEmail(value[2][1]);
           setPhone(value[3][1]);
          }).catch(err=>console.log(err));
  

  return (
    <View style={styles.container}>
    <FlipCard  
  style= {styles.container1}
  friction={6}
  perspective={1000}
  flipHorizontal={true}
  flipVertical={false}
  flip={false}
  clickable={true}
  onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}>
  {/* Face Side */}

  <View style={styles.container1}>
  <Animatable.View >
       <Text style={styles.logo}>DETAILS</Text>
        </Animatable.View>
      
      <Card style={{backgroundColor:'#181920',color:'#181920'}} containerStyle={{backgroundColor:'#181920'}}>
          <View style={{backgroundColor:'#ffffff'}}>
  
 

  <Animatable.Text animation="fadeInDown" style={styles.text1}><Ionicons name="md-person" size={24} color="#465881" />   Name:   
  </Animatable.Text>
  
  <Animatable.Text animation="fadeInDown" delay={200} style={styles.text}>{username}
  </Animatable.Text>
  <Animatable.Text animation="fadeInDown" delay={400} style={styles.text1}><MaterialIcons name="email" size={24} color="#465881"  />  Email Id: 
  </Animatable.Text>
  <Animatable.Text animation="fadeInDown" delay={600}  style={styles.text}>{email}
  </Animatable.Text>
  <Animatable.Text animation="fadeInDown" delay={800} style={styles.text1}><FontAwesome name="hourglass" size={24} color="#465881"  />    Age:
  </Animatable.Text>
  <Animatable.Text animation="fadeInDown" delay={1000} style={styles.text}>{age} years
  </Animatable.Text>
  <Animatable.Text animation="fadeInDown" delay={1200} style={styles.text1}><Entypo name="phone" size={24} color="#465881"  /> Phone No:
  </Animatable.Text>
  <Animatable.Text animation="fadeInDown" delay={1400} style={styles.text}>{phone}
  </Animatable.Text>
   </View>
    </Card>
    
  </View>
  {/* Back Side */}
  <View style={styles.container}>
  
 
      
  <Animatable.View animation="wobble" iterationCount="infinite" style={styles.container2}   >
  <Ionicons name="md-hand" size={96} color="#465881" />
  </Animatable.View>
  
  <View style={styles.container2}>
    <Text style={styles.container2}>Thanks for using our application</Text>
    </View>
  
    
 <TouchableOpacity
             style={styles.loginBtn }
             onPress={()=>{ AsyncStorage.multiRemove(key); return props.navigation.navigate('Auth')}}
              activeOpacity={0.5}
            >
              <Text style={styles.buttonTextStyle}>LOG OUT</Text>
            </TouchableOpacity>

</View>  
  
</FlipCard>
   
     
     
    </View>
  );
};
export default LogOut;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181920',
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      container1: {
        flex: 1,
        backgroundColor: '#181920',
        alignItems: 'center',
        justifyContent: 'center',
      },
      container2: {
        flex: 1,
        backgroundColor: '#181920',
        alignItems: 'center',
        justifyContent: 'center',
        color:"#ada9b1",
    fontSize:20
      },
    
      fixedRatio: {
        backgroundColor: '#ffffff',
        flex: 1,
        aspectRatio: 1
      },
      text:{
        backgroundColor:'#181920',
        color:'#ada9b1',
        fontSize:25,
        alignItems: 'center',
        justifyContent: 'center',
     },
     text1:{
        backgroundColor:'#181920',
        color:'#465881',
        fontSize:25,
        alignItems: 'center',
        justifyContent: 'center',

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
      buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
      },
      logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"#465881",
        marginBottom:40,
         },
});