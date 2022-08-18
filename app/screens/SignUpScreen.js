import {StyleSheet, Alert, SafeAreaView} from 'react-native';
import {colors} from '../components/colors';

export default function SignUpScreen(){

    return(
        <SafeAreaView style = {styles.background}>
        
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: colors['color-tan'],
      alignItems: "center",
      justifyContent: "center",
    },
})