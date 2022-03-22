import { StatusBar } from "expo-status-bar";
import React from "react";
import styled from "styled-components";
import { CCThemeProvider } from "@companycam/slab";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/Home/HomeScreen";
import AnimatedExample from "./components/Animated/AnimatedExample";
import LayoutAnimationExample from "./components/LayoutAnimation/LayoutAnimationExample";
import ReanimatedExample from "./components/Reanimated/ReanimatedExample";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CCThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="RN Animated" component={AnimatedExample} />
          <Stack.Screen
            name="RN LayoutAnimation"
            component={LayoutAnimationExample}
          />
          <Stack.Screen name="RN Reanimated" component={ReanimatedExample} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </CCThemeProvider>
  );
}
