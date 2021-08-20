import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import Home from "./screens/HomeScreen";

const App = () => {
  return (
    <View style={styles.container}>
      <Home></Home>
    </View>
  )
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: "center"
  }
})