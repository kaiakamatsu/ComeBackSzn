import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View} from "react-native";
import {colors} from '../components/colors';

function Clock() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return <Text style={styles.time}>{clockState}</Text>;
}

export default Clock;

const styles = StyleSheet.create({
  time: {
    fontWeight: "bold",
    top: 50,
    left: 65,
    fontSize: 50,
    color: colors['color-red'],
  },

});