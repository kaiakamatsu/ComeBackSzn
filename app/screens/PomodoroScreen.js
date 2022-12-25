import { View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native'
import {colors} from '../components/colors';
import React, { useState } from "react";
import { BackButton } from "../components/BackButton";
import { Timer } from "../components/Timer";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

const renderTimer = ({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60)
        const seconds = remainingTime % 60
        const string = `${minutes}:${seconds}`
        return (
          <Text style = {styles.timetext}>{string}</Text>
        );
};

export default function PomodoroScreen() {

  const [time, setTime] = useState(1500);  

    return(
        <View style = {styles.background}>
          <View style = {styles.timercontainer}>
            <CountdownCircleTimer
              isPlaying
              duration={time}
              colors={['#004777', '#F7B801', '#A30000', '#A30000']}
              colorsTime={[1125, 750, 375, 0]}
              size={350}
              onComplete={() => {
                setTime(300)
                return { shouldRepeat: true, delay: 0.5 }
              }}
            >
              {renderTimer}
            </CountdownCircleTimer>
          </View>
          <BackButton
            backstyle = {styles.backbutton}
            backtextstyle = {styles.backtext}
          />  
        </View>
    );
};

const styles = StyleSheet.create({
  timercontainer: {
    position: 'absolute',
    left: 35,
  },
  background: {
    flex: 1,
    backgroundColor: colors['color-tan'],
    justifyContent: "center",
  },
  backbutton:{
    position: 'absolute',
    padding: 20,
    backgroundColor: "white",
    borderRadius: 50,
    borderWidth: 2,
    width: 85,
    top: 750,
    left: 50,
  },
  backtext:{
    fontStyle: "italic",
  },
  timetext:{
    fontWeight: 'bold',
    fontSize: 25,
  },
});