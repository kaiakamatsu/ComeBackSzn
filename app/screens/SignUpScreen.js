import {StyleSheet, SafeAreaView} from 'react-native';
import {colors} from '../components/colors';
import {BackButton} from '../components/BackButton';

export default function SignUpScreen(){

    return(
        <SafeAreaView style = {styles.background}>
            <BackButton
            backstyle = {styles.backbutton}
            backtextstyle = {styles.backtext}
            />
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
})