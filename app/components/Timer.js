import { View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import React, { useState } from "react";

const renderTimer = ({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60)
        const seconds = remainingTime % 60
        const string = `${minutes}:${seconds}`
        return (
          <Text style = {styles.timetext}>{string}</Text>
        );
};


export const Timer = ({navigation, route}) => (

    <View style = {styles.timercontainer}>
        <CountdownCircleTimer
            isPlaying
            duration={10}
            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[1125, 750, 375, 0]}
            size={350}
            onComplete={() => {
              
            }}
        >
          {renderTimer}
        </CountdownCircleTimer>
    </View>
)

const styles = StyleSheet.create({
  timercontainer: {
    position: 'absolute',
    left: 35,
  },
  timetext:{
    fontWeight: 'bold',
    fontSize: 25,
  },
});