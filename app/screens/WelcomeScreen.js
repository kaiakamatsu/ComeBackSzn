import { StyleSheet, Text, TouchableOpacity, SafeAreaView, Alert, Image, TouchableHighlight} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {FadeInView} from '../components/FadeIn'

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#DFDCC4",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 230, 
    height: 260
  },
});


function WelcomeScreen ({navigation}) {
          return (
            <SafeAreaView style = {styles.background}>
              <FadeInView>
                <TouchableHighlight 
                activeOpacity = {0.6}
                underlayColor = "#DFDCC4"
                onPress={() => navigation.navigate('Login')}>
                  <Image 
                  source = {require('C:/Users/kaiak/ComeBackSzn/app/assets/logored.png')} 
                  style = {styles.logo}
                  />
                </TouchableHighlight>
              </FadeInView>
            </SafeAreaView>
          );
};

export default WelcomeScreen