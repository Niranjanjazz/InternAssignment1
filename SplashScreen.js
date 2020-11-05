import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import * as Animatable from 'react-native-animatable';
import { MaterialIcons,MaterialCommunityIcons,FontAwesome5,Ionicons,Entypo  } from '@expo/vector-icons';

const SplashScreen = props => {

  let [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
     
      AsyncStorage.getItem('username').then(value =>
        props.navigation.navigate(
          value === null ? 'Auth' : 'WelcomePage'
        )
      );
    }, 3000);
  }, []);

  return (
    <View style={styles.container1}>
  <View style={styles.container1}>
      
      <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center' }}>
      <MaterialIcons name="wb-sunny" size={64} color="orange" />
      </Animatable.View>
      </View>
      
      <View style={styles.container3}>
      <Animatable.View animation="slideInDown" iterationCount={3}   >
      
      <Ionicons name="ios-water" size={24} color="skyblue" />
      <Ionicons name="ios-water" size={24} color="skyblue" />
      <Ionicons name="ios-water" size={24} color="skyblue" />
      <Ionicons name="ios-water" size={24} color="skyblue" />
      <Ionicons name="ios-water" size={24} color="skyblue" />
      </Animatable.View>
      
     
      <Animatable.View animation="zoomIn" delay={1000} duration={3000} >
      <FontAwesome5 name="seedling" size={144} color="green"  />
      </Animatable.View>
     
      <Animatable.View animation="bounceOut" duration={3000}>
      <MaterialCommunityIcons name="seed" size={24} color="brown" />
      </Animatable.View>
      <Entypo name="cup" size={144} color="brown" />
    
      </View>

  </View>
);
};
export default SplashScreen;

const zoomIn = {
    0: {
      opacity: 0,
      scale: 0,
    },
    0.5: {
      opacity: 1,
      scale: 0.3,
    },
    1: {
      opacity: 1,
      scale: 1,
    },
  };
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#181920',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 2,
    backgroundColor: '#181920',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container3: {
    flex: 2,
    backgroundColor: '#181920',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
