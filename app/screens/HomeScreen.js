import { StyleSheet, Text, View} from "react-native";
import {colors} from '../components/colors';


export default function HomeScreen() {
    return(
        <View style = {styles.background}>
            <Text>Home</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors['color-tan'],
    alignItems: "center",
    justifyContent: "center",
  },
});