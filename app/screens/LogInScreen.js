import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, SafeAreaView, Image, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback} from 'react-native';
import {colors} from '../components/colors';
import {BackButton} from '../components/BackButton';
import {LogoBlack} from '../components/LogoBlack';
import {auth, db} from '../../backend/firebase';
import {signOut, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';

export default function LogInScreen({navigation}) {

      signOut(auth);

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            navigation.navigate("Home", {id: user.uid});
          }
        })

        return unsubscribe
      }, []);

      const handleLogIn = () => {

        signInWithEmailAndPassword(auth, email, pass)
            .then(UserCredential => {
                const user = UserCredential.user;
                console.log("Logged in with: ", user.email);
            })
            .catch(error => alert(error.message))
      };

      const [email, setEmail] = useState('');

      const [pass, setPass] = useState('');

      return (
        <TouchableWithoutFeedback onPress = {Keyboard.dismiss} accessible = {false}>
          <SafeAreaView style = {styles.background}>
            <KeyboardAvoidingView style = {{flex: 1}} behavior = "position">
              <LogoBlack
              style = {styles.logo}/>
              <TextInput style={styles.email}
              autoCorrect = {false}
              clearTextOnFocus = {true}
              keyboardAppearance = {"dark"}
              placeholder = "EMAIL"
              textAlign = "center"
              value={email}
              onChangeText={(text) => setEmail(text)}   
              />
              <TextInput style={styles.password}
              autoCorrect = {false}
              clearTextOnFocus = {true}
              keyboardAppearance = {"dark"}
              placeholder = "PASS"
              textAlign = "center"
              secureTextEntry
              value={pass}
              onChangeText={(text) => setPass(text)}
              />
              <BackButton
              backstyle = {styles.backbutton}
              backtextstyle = {styles.backtext}
              />
              <TouchableOpacity 
              style={styles.loginbutton}
              onPress={handleLogIn}>
                <Text style = {styles.logintext}>
                  LOG IN
                </Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      );
};


const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors['color-tan'],
    alignItems: "center",
    justifyContent: "center",
  },
  email: {
      height: 50,
      width: 165,
      margin: 30,
      borderWidth: 2,
      borderRadius: 50,
      padding: 25,
      paddingVertical: 0,
      top: 400, 
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
      top: 375,
      fontSize: 20,
      color: "black",
    },
  logo: {
      width: 200, 
      height: 220,
      left: 15,
      position: 'absolute',
      top: 200,
    },
  backbutton:{
    padding: 20,
    backgroundColor: "white",
    borderRadius: 50,
    borderWidth: 2,
    width: 85,
    top: 500,
    right: 80,
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
    width: 95,
    top: 438,
    left: 210,
  },
});