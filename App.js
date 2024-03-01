import { React, useState } from 'react';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import { StatusBar } from "expo-status-bar"
import  Header from './src/component/header.jsx'


export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 30 }}>
        <Header/>
        <Text style={styles.Text}> Time!</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  Text: {
    fontSize: 32,
    fontWeight: "bold"
  }
});
