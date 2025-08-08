import "../../global.css";
import { useFonts } from "expo-font";
import { ThemeProvider, DefaultTheme } from "@react-navigation/native";

import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const [loaded] = useFonts({
    GeistThin: require("@/assets/fonts/Geist-Thin.ttf"),
    GeistLight: require("@/assets/fonts/Geist-Light.ttf"),
    GeistExtralight: require("@/assets/fonts/Geist-ExtraLight.ttf"),
    GeistMedium: require("@/assets/fonts/Geist-Medium.ttf"),
    GeistNormal: require("@/assets/fonts/Geist-Regular.ttf"),
    GeistSemibold: require("@/assets/fonts/Geist-SemiBold.ttf"),
    GeistBold: require("@/assets/fonts/Geist-Bold.ttf"),
    GeistExtrabold: require("@/assets/fonts/Geist-ExtraBold.ttf"),
    GeistBlack: require("@/assets/fonts/Geist-Black.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator size={"large"} />;
  }

  return (
    <>
      <ThemeProvider value={DefaultTheme}>
        <Stack
          initialRouteName="index"
          screenOptions={{
            headerShown: false,
          }}
        />
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
