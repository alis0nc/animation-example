import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React from "react";
import styled from "styled-components";
import { CCThemeProvider } from "@companycam/slab";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/Home/HomeScreen";
import AnimatedExample from "./components/Animated/AnimatedExample";
import LayoutAnimationExample from "./components/LayoutAnimation/LayoutAnimationExample";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    "Averta-Bold": require("./assets/fonts/Averta-Bold.otf"),
    "Averta-BoldItalic": require("./assets/fonts/Averta-BoldItalic.otf"),
    "Averta-Extrabold": require("./assets/fonts/Averta-Extrabold.otf"),
    "Averta-Regular": require("./assets/fonts/Averta-Regular.otf"),
    "Averta-RegularItalic": require("./assets/fonts/Averta-RegularItalic.otf"),
    "Averta-Semibold": require("./assets/fonts/Averta-Semibold.otf"),
    "Averta-SemiboldItalic": require("./assets/fonts/Averta-SemiboldItalic.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </CCThemeProvider>
  );
}
