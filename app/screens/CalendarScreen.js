import { StyleSheet, Text, View, Modal, TouchableOpacity} from "react-native";
import React, { useState } from "react";
import {colors} from '../components/colors';
import { ButtonOptions } from "../components/ButtonOptions";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { format } from "date-fns";
import {db} from '../../backend/firebase';
import { doc, setDoc, collection, addDoc, arrayRemove } from "firebase/firestore";


export default function CalendarScreen({navigation, route}) {

  const [modalVisible, setModalVisible] = useState(false);
  const [datetext, setdatetext] = useState("no date");

  const handleModal = (response) => {
    events = "";
    console.log(response);
    setModalVisible(!modalVisible);
    const update = response.month + " - " + response.day + " - " + response.year;
    setdatetext(update);
    getApps(response.dateString);
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
                <Text style={styles.agenda}>AGENDA {datetext}</Text>
                <Text style={styles.event}>{events} </Text>
                <TouchableOpacity
                  style={styles.buttonClose}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.hide}>HIDE</Text>
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

let events = null;

const getApps = (datetext) => {
  console.log(datetext);
  let apps = appointments.filter(day => day.date.includes(datetext));
  console.log(apps);
  for (let i = 0; i < apps.length; i++)
    events = events + apps[i].title + "\n" + "\n" + "\n";
  console.log(events);
  return events;
}

const appointments = [
  {
    date: "2022-12-12T12:30:00-07:00",
    title: "Meeting with Harold",
  },
  {
    date: "2022-12-13T12:30:00-07:00",
    title: "Test",
  },
  {
    date: "2022-12-14T12:30:00-07:00",
    title: "Flight to Berlin",
  },
  {
    date: "2022-12-14T12:30:00-07:00",
    title: "Eat Hotdog",
  },
  {
    date: "2022-12-14T12:30:00-07:00",
    title: "CS lecture",
  },
  {
    date: "2022-12-17T12:30:00-07:00",
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
  buttonClose: {
    position: "absolute",
    bottom: 10,
    borderWidth: 2,
    borderRadius: 20,
    padding: 15,
    borderColor: colors['color-red'],
  },
  hide: {
    fontWeight: "bold",
    fontStyle: "italic",
    color: colors['color-red'],
  },
  agenda: {
    fontWeight: "bold",
    fontStyle: "italic",
    color: colors['color-red'],
    fontSize: 20,
    right: 50,
  },
  event: {
    fontWeight: "bold",
    fontSize: 15,
    top: 30.
  }
});