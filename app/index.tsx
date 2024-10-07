import "react-native-gesture-handler"; // Initialize gesture handler globally
import { AppRegistry } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler"; // Needed for gesture-based components
import App from "./App"; // Import the root component (App.tsx)
import { name as appName } from "./package.json";

const RootApp = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <App />
  </GestureHandlerRootView>
);

AppRegistry.registerComponent(appName, () => RootApp); // Register the app with the React Native system
