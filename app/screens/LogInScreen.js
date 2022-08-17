import React, {useRef, useEffect} from 'react';
import {Animated, StyleSheet, Text, TextInput, SafeAreaView, Alert, Image} from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#DFDCC4",
    alignItems: "center",
    justifyContent: "center",
  },
  username: {
      height: 50,
      margin: 30,
      borderWidth: 2,
      padding: 25,
      position: 'absolute',
      bottom: 375,
    },
  password: {
      height: 50,
      margin: 30,
      borderWidth: 2,
      padding: 25,
      position: 'absolute',
      bottom: 300,
    },
  logo: {
      width: 200, 
      height: 220,
      position: 'absolute',
      bottom: 450,
    },
});

export default function LogInScreen() {

  const [text, onChangeUser] = React.useState("username");
  const [text2, onChangePass] = React.useState("password");

      return (
        <SafeAreaView style = {styles.background}>
            <Image source = {require('C:/Users/kaiak/ComeBackSzn/app/assets/logoblack.png')} style = {styles.logo}></Image>
            <TextInput style={styles.username}
              onChangeText={onChangeUser}
              value={text}
            />
            <TextInput style={styles.password}
              onChangeText={onChangePass}
              value={text2}
            />
        </SafeAreaView>
      );
};