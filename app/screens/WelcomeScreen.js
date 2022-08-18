import { StyleSheet, Text, TouchableOpacity, SafeAreaView, Alert, Image, TouchableHighlight} from 'react-native';
import {FadeInView} from '../components/FadeIn';
import {colors} from '../components/colors';
import {LogoRed} from '../components/LogoRed';

export default function WelcomeScreen ({navigation}) {
          return (
            <SafeAreaView style = {styles.background}>
              <FadeInView>
                <TouchableHighlight 
                activeOpacity = {0.6}
                underlayColor = {colors['color-tan']}
                onPress={() => navigation.navigate('Account')}>
                  <LogoRed
                  style = {styles.logo}
                  />
                </TouchableHighlight>
              </FadeInView>
            </SafeAreaView>
          );
};


////https://blog.devgenius.io/waiting-for-asynchronous-load-in-react-native-bc160f2389c7


const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors['color-tan'],
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 230, 
    height: 260
  },
});