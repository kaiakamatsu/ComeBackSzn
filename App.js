import React, {useState} from 'react';
import { AppLoading } from 'expo';
import { SafeAreaProvider } from "react-native-safe-area-context";
import MyStack from './app/components/stack';


export default function App() {
  return (
    <SafeAreaProvider>
      <MyStack/>
    </SafeAreaProvider>
  );
};