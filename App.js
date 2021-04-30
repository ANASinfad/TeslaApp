import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItem from "./components/CarItem";
//things u gonna use import them
export default function App() {
  return (
    <View style={styles.container}>
      <CarItem>

      </CarItem>


      <StatusBar style="auto" />
    </View>
  );
}
//where to put all the styles u need for this view
// a view is like a div a container
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
//to take the hole space of the screen


});
