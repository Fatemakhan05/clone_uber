import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import React from "react";
import { store } from "./store";
import HomeScreen from "./screens/HomeScreen";

// set uo redux

export default function App() {
  return (
    <Provider store={store}>
       <HomeScreen/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
