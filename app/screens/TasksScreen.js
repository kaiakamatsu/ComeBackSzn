import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal} from "react-native";
import {colors} from '../components/colors';
import { ButtonOptions } from "../components/ButtonOptions";
import React, { useState } from "react";
import { format } from "date-fns";


export default function TasksScreen({navigation, route}) {

  const [modalVisible, setModalVisible] = useState(false);
  const [taskname, settaskname] = useState("task");

  const startTask = (name) => {
    setModalVisible(!modalVisible);
    settaskname(name);

  };

  const renderItem = ({ item }) => (
    <View style = {styles.item}>
      <TouchableOpacity
      onPress={() => startTask(item.name)}
      >
        <Text style = {styles.name}>{item.name}</Text>
      </TouchableOpacity>
      <Text style = {styles.subject}>{item.subject}</Text>
      <Text style = {styles.length}>HOURS: {item.length} </Text>
    </View>
  );

    return(
        <View style = {styles.background}>
            <Text style = {styles.userid}>{route.params.id}'s Tasks</Text>
            <Text style = {styles.date}>{today}</Text>
            <View style = {styles.listcontainer}>
              <FlatList
              data={tasks}
              renderItem={renderItem}
              />
            </View>
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
                <Text style={styles.task}>{taskname}</Text>
                <TouchableOpacity
                  style={styles.buttonClose}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.hide}>HIDE</Text>
                </TouchableOpacity>
              </View>
            </Modal>
            <ButtonOptions buttoncontainer = {styles.bcontainer} ID = {route.params.id}/>
        </View>
    );
};

const now = new Date();

const today = format(now, "MM/dd/yyyy");


const tasks = [
  {
    date: "2022-12-14",
    length: 1,
    name: "PS 7",
    subject: "OCHEM",
  },
  {
    date: "2022-12-14",
    length: 2,
    name: "SUBMIT JOBS",
    subject: "WORK",
  },
  {
    date: "2022-12-14",
    length: 3,
    name: "Essay 1",
    subject: "WRITING",
  },
  {
    date: "2022-12-14",
    length: 2,
    name: "STUDY FOR MIDTERM 1",
    subject: "PHYSICS",
  },
  {
    date: "2022-12-14",
    length: .5,
    name: "Apply to Internship",
    subject: "OTHER",
  },
  {
    date: "2022-12-14",
    length: 2,
    name: "CS PA7",
    subject: "CS",
  },
  {
    date: "2022-12-14",
    length: .5,
    name: "Organize Fundraiser",
    subject: "CLUBS",
  },
]; //after integrating with backend, this would come from the firebase db, EACH DAY


const styles = StyleSheet.create({
  bcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    top: 50,
    borderTopColor: "black",
    borderTopWidth: 1,
  },
  background: {
    flex: 1,
    backgroundColor: colors['color-tan'],
    justifyContent: "center",
  },
  userid: {
    bottom: 0,
    left: 20,
    fontSize: 20,
    fontStyle: "italic",
    color: "black",
  },
  date:{
    fontWeight: "bold",
    bottom: 0,
    left: 20,
    fontSize: 20,
    color: "black",
    fontStyle: "italic",
  },
  name: {
    color: colors['color-red'],
    fontWeight: "bold",
    fontSize: 25,
  }, 
  length: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
  },
  subject: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
  },
  item:{
    backgroundColor: "white",
    padding: 20,
    borderBottomWidth: 10,
    borderBottomColor: colors['color-tan'],
  },
  listcontainer:{
    height: 650,
    width: 375,
    left: 20,
    top: 40,
    borderColor: colors['color-red'],
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    borderStyle: "dashed",
  },
  modalView: {
    height: 685,
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
  task: {
    fontWeight: "bold",
    fontStyle: "italic",
    color: colors['color-red'],
    fontSize: 30,
  }
});