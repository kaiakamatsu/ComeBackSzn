import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, SafeAreaView, Alert, Image, TouchableOpacity} from 'react-native';
import {colors} from '../components/colors';
import { useNavigation } from '@react-navigation/native';
import {LogoBlack} from '../components/LogoBlack';


export default function AccountScreen() {

      return (
        <SafeAreaView style = {styles.background}>
            <LogoBlack
            style = {styles.logo}/>
            <SignUpButton/>
            <LogInButton/>
        </SafeAreaView>
      );
};

function LogInButton() {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.login} 
        onPress = {()=> navigation.navigate('Login')}>
            <Text style = {styles.logintext}>
                LOG IN
            </Text>
        </TouchableOpacity>
    );
}

function SignUpButton() {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.signup} 
        onPress = {()=> navigation.navigate('Signup')}>
            <Text style = {styles.signuptext}>
                SIGN UP
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors['color-tan'],
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
      width: 200, 
      height: 220,
      position: 'absolute',
      bottom: 450,
    },
  login:{
    padding: 20,
    width: 120,
    backgroundColor: "white",
    borderRadius: 50,
    borderWidth: 2,
    bottom: 10,
  },
  signup:{
    padding: 20,
    width: 120,
    backgroundColor: "white",
    borderRadius: 50,
    borderWidth: 2,
    top: 150,
  },
  logintext:{
    color: "black",
    fontWeight: "bold",
    fontStyle: "italic",
    left: 12,
  },
  signuptext:{
    color: "black",
    fontWeight: "bold",
    fontStyle: "italic",
    left: 10,
  },
});