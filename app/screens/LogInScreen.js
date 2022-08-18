import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, SafeAreaView, Alert, Image, TouchableOpacity} from 'react-native';
import {colors} from '../components/colors';
import { useNavigation } from '@react-navigation/native';


export default function LogInScreen() {

      return (
        <SafeAreaView style = {styles.background}>
            <Image source = {require('C:/Users/kaiak/ComeBackSzn/app/assets/logoblack.png')} style = {styles.logo}></Image>
            <UsernameTextInput/>
            <PasswordTextInput/>
            <BackButton/>
            <LogInButton2/>
        </SafeAreaView>
      );
};

function UsernameTextInput(){

  const [user, onChangeUser] = useState('USERNAME');

  return(
    <TextInput style={styles.username}
        autoCorrect = {false}
        clearTextOnFocus = {true}
        keyboardAppearance = {"dark"}
        placeholder = "USERNAME"
        onChangeText={(value) => onChangeUser(value)}
        value={user}
            
    />
  );
}

function PasswordTextInput(){

  const [pass, onChangePass] = useState('PASSWORD');

  return(
    <TextInput style={styles.password}
      autoCorrect = {false}
      clearTextOnFocus = {true}
      keyboardAppearance = {"dark"}
      placeholder = "PASSWORD"
      onChangeText={(value) => onChangePass(value)}
      value={pass}

    />
  );
}

function LogInButton2() {

  return (
      <TouchableOpacity style={styles.loginbutton}>
          <Text style = {styles.logintext}>
              LOG IN
          </Text>
      </TouchableOpacity>
  );
}

function BackButton() {

  const navigation = useNavigation();

  return (
      <TouchableOpacity style={styles.backbutton} 
      onPress = {()=> navigation.goBack()}>
          <Text style = {styles.backtext}>
              BACK
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
  username: {
      height: 50,
      width: 165,
      margin: 30,
      borderWidth: 2,
      borderRadius: 50,
      padding: 25,
      paddingVertical: 0,
      top: 125, 
      fontSize: 20,
      color: "black",
    },
  password: {
      height: 50,
      width: 165,
      margin: 30,
      borderWidth: 2,
      borderRadius: 50,
      padding: 25,
      paddingVertical: 0,
      top: 100,
      fontSize: 20,
      color: "black",
    },
  logo: {
      width: 200, 
      height: 220,
      position: 'absolute',
      bottom: 450,
    },
  backbutton:{
    padding: 20,
    backgroundColor: "white",
    borderRadius: 50,
    borderWidth: 2,
    top: 200,
    right: 120,
  },
  backtext:{
      fontStyle: "italic",

  },
  logintext:{
      fontStyle: "italic",

  },
  loginbutton:{
    padding: 20,
    backgroundColor: "white",
    borderRadius: 50,
    borderWidth: 2,
    top: 140,
    left: 120,
  },
});