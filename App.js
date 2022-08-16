import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, View, Image, Button, Alert, Dimensions} from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import MyStack from './app/components/stack';


export default function App() {
  return (
    <SafeAreaProvider>
      <MyStack/>
    </SafeAreaProvider>
  );
};