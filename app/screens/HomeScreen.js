import { StyleSheet, Text, View} from "react-native";
import {colors} from '../components/colors';
import { ButtonOptions } from "../components/ButtonOptions";
import {React}  from 'react';
import Clock from '../components/Clock';
import {LogoHome} from '../components/homelogo';


export default function HomeScreen({navigation, route}) {
    return(
        <View style = {styles.background}>
            <LogoHome
                  style = {styles.logo}
                  />
            <Text style = {styles.userid}>{route.params.id}'s HOME</Text>
            <Clock/> 
            <ButtonOptions buttoncontainer = {styles.bcontainer} ID = {route.params.id}/>
        </View>
    );
};

const styles = StyleSheet.create({
  bcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    top: 230,
    borderTopColor: "black",
    borderTopWidth: 1,
  },
  background: {
    flex: 1,
    backgroundColor: colors['color-tan'],
    justifyContent: "center",
  },
  userid: {
    fontWeight: "bold",
    top: 150,
    left: 50,
    fontSize: 20,
    fontStyle: "italic",
    color: 'black',
  },
  logo: {
    left: 90,
    width: 230, 
    height: 260
  },
});