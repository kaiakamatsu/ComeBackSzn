import { StyleSheet, Text, TouchableOpacity, SafeAreaView, Alert, Image, TouchableHighlight} from 'react-native';
import {FadeInView} from '../components/FadeIn'
import {colors} from '../components/colors';

export default function WelcomeScreen ({navigation}) {
          return (
            <SafeAreaView style = {styles.background}>
              <FadeInView>
                <TouchableHighlight 
                activeOpacity = {0.6}
                underlayColor = {colors['color-tan']}
                onPress={() => navigation.navigate('Account')}>
                  <Image 
                  source = {require('C:/Users/kaiak/ComeBackSzn/app/assets/logored.png')} 
                  style = {styles.logo}
                  />
                </TouchableHighlight>
              </FadeInView>
            </SafeAreaView>
          );
};

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