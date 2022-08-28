import { useNavigation } from '@react-navigation/native';
import {View, Text, TouchableOpacity, Button, StyleSheet, Image} from 'react-native';

export const ButtonOptions = (props) => {
  
    return (
        <View style = {props.buttoncontainer}>
            <CalendarButton iden = {props.ID} calendarstyle = {styles.calendarbutton}/>
            <TasksButton iden = {props.ID} tasksstyle = {styles.tasksbutton}/>
            <HomeButton iden = {props.ID} homestyle = {styles.homebutton}/>
            <HealthyButton iden = {props.ID} healthystyle = {styles.healthybutton}/>
            <SettingsButton iden = {props.ID} settingsstyle = {styles.settingsbutton}/>
        </View>
    );
  }

  const styles = StyleSheet.create({
  homebutton: {
    width: 70,
    height: 70,
  },
  calendarbutton: {
    width: 40,
    height: 40,
  },
  tasksbutton: {
    width: 40,
    height: 40,
  },
  healthybutton: {
    width: 40,
    height: 40,
  },
  settingsbutton:{
    width: 40,
    height: 40,
  },
});

const HomeButton = (props) => {

    const navigation = useNavigation();
  
    return (
        <TouchableOpacity 
        onPress = {()=> navigation.navigate("Home", {id: props.iden})}>
            <Image 
            style = {props.homestyle}
            source = {require("C:/Users/kaiak/ComeBackSzn/app/assets/home.png")}
            />
        </TouchableOpacity>
    );
  }

const CalendarButton = (props) => {

    const navigation = useNavigation();
  
    return (
        <TouchableOpacity 
        onPress = {()=> navigation.navigate("Calendar", {id: props.iden})}>
            <Image 
            style = {props.calendarstyle}
            source = {require("C:/Users/kaiak/ComeBackSzn/app/assets/calendar.png")}
            />
        </TouchableOpacity>
    );
  }

const TasksButton = (props) => {

    const navigation = useNavigation();
  
    return (
        <TouchableOpacity 
        onPress = {()=> navigation.navigate("Tasks", {id: props.iden})}>
            <Image 
            style = {props.tasksstyle}
            source = {require("C:/Users/kaiak/ComeBackSzn/app/assets/tasks.png")}
            />
        </TouchableOpacity>
    );
  }

const HealthyButton = (props) => {

    const navigation = useNavigation();
  
    return (
        <TouchableOpacity 
        onPress = {()=> navigation.navigate("Healthy", {id: props.iden})}>
            <Image 
            style = {props.healthystyle}
            source = {require("C:/Users/kaiak/ComeBackSzn/app/assets/healthy.png")}
            />
        </TouchableOpacity>
    );
  }

const SettingsButton = (props) => {

    const navigation = useNavigation();
  
    return (
        <TouchableOpacity 
        onPress = {()=> navigation.navigate("Settings", {id: props.iden})}>
            <Image 
            style = {props.settingsstyle}
            source = {require("C:/Users/kaiak/ComeBackSzn/app/assets/settings.png")}
            />
        </TouchableOpacity>
    );
  }