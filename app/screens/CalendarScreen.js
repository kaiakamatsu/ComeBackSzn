import { StyleSheet, Text, View, Modal, TouchableOpacity} from "react-native";
import React, { useState } from "react";
import {colors} from '../components/colors';
import { ButtonOptions } from "../components/ButtonOptions";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { format } from "date-fns";
import {db} from '../../backend/firebase';
import { doc, setDoc, collection, addDoc } from "firebase/firestore";


export default function CalendarScreen({navigation, route}) {

  const [modalVisible, setModalVisible] = useState(false);

  const handleModal = (response) => {
    console.log(response);
    setModalVisible(!modalVisible);
    const datetext = response.month + " - " + response.day + " - " + response.year;
    console.log(datetext);
  };

    return(
        <View style = {styles.background}>
          <View style = {styles.calendarcontainer}>
            <CalendarList
              pastScrollRange={6}
              futureScrollRange={18}
              onDayPress = {(response) => handleModal(response)}
              minDate = {Format (min)}
              markedDates = {getMarkedDates(now, appointments)}
              theme = {{
                calendarBackground: colors['color-tan'],
                selectedDayBackgroundColor: colors['color-red'],

                dotColor: colors['color-red'],
                dayTextColor: "black",
                textDisabledColor: "white",

                monthTextColor: "black",
                textSectionTitleColor: "black",
                textMonthFontWeight: "bold",
                arrowColor: colors['color-red'],
              }}
            />
            <Modal 
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.modalView}>
                <Text></Text>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text>Hide Modal</Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </View>
          <ButtonOptions buttoncontainer = {styles.bcontainer} ID = {route.params.id}/>
        </View>
    );
};

const now = new Date();

const min = new Date (2022, 7, 1);

const Format = (date = new Date()) => format(date, "yyyy-MM-dd");

const appointments = [
  {
    date: "2022-08-27",
    title: "Meeting with Harold",
  },
  {
    date: "2022-08-28",
    title: "Test",
  },
  {
    date: "2022-09-05",
    title: "Flight to Berlin",
  },
  {
    date: "2022-09-17T12:30:00-07:00",
    title: "Brother's Birthday!",
  },
]; //after integrating with backend, this would come from the firebase db 

const getMarkedDates = (today, events = []) => {
  const markedDates = {};

  markedDates[Format(today)] = {selected: true};

  events.forEach(ev => {
    const formattedDate = Format(new Date(ev.date));
    markedDates[formattedDate] = {
      ...markedDates[formattedDate],
      marked: true,
    }
  })

  return markedDates;
};

const styles = StyleSheet.create({
  bcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    bottom: 50,
    borderTopColor: "black",
    borderTopWidth: 1,
  },
  background: {
    flex: 1,
    backgroundColor: colors['color-tan'],
    justifyContent: "center",
  },
  calendarcontainer:{ 
    bottom: 50,
  },
  modalView: {
    height: 600,
    top: 100,
    margin: 20,
    backgroundColor: colors['color-tan'],
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
});