import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

type AppSafeViewProps = {
  children: ReactNode;
} & SafeAreaViewProps;

export default function AppSafeView({ children }: AppSafeViewProps) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#FFFFFF", "#F4F4F4"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={StyleSheet.absoluteFillObject}
      />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
