import { StyleSheet, Text, View} from "react-native";
import {colors} from '../components/colors';
import { ButtonOptions } from "../components/ButtonOptions";


export default function HomeScreen({navigation, route}) {
    return(
        <View style = {styles.background}>
            <Text>{route.params.id}'s Home</Text>
            <ButtonOptions buttoncontainer = {styles.bcontainer} ID = {route.params.id}/>
        </View>
    );
};

const styles = StyleSheet.create({
  bcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    top: 395,
    borderTopColor: "black",
    borderTopWidth: 1,
  },
  background: {
    flex: 1,
    backgroundColor: colors['color-tan'],
    justifyContent: "center",
  },
});