import { StyleSheet, Text, View} from "react-native";
import {colors} from '../components/colors';
import { ButtonOptions } from "../components/ButtonOptions";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { format } from "date-fns";


export default function CalendarScreen({navigation, route}) {

    return(
        <View style = {styles.background}>
          <View style = {styles.calendarcontainer}>
            <CalendarList
              pastScrollRange={6}
              futureScrollRange={18}
              onDayPress = {(response) => console.log(response)}
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
    date: "2022-08-27T05:00:00.00",
    title: "Meeting with Harold",
  },
  {
    date: "2022-08-28T05:00:00.00",
    title: "Test",
  },
  {
    date: "2022-09-05T05:00:00.00",
    title: "Flight to Berlin",
  },
  {
    date: "2022-09-17T05:00:00.00",
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
});