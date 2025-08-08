import { StyleSheet, Text, TextProps, View } from "react-native";
import React from "react";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

type GradientTextProps = {
  title: string;
  isActive?: boolean;
} & TextProps;

export default function GradientText({
  style,
  title,
  isActive,
  className,
}: GradientTextProps) {
  return (
    <MaskedView
      maskElement={
        <Text
          className={className}
          style={[style, { backgroundColor: "transparent" }]}
        >
          {title}
        </Text>
      }
    >
      <LinearGradient
        colors={[
          isActive ? "rgba(255, 255, 255, 1)" : "rgba(153, 153, 153, 1)",

          "rgba(255, 255, 255, 1)",
          isActive ? "rgba(255, 255, 255, 1)" : "rgba(204, 204, 204, 1)",
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <Text className={className} style={[style, { opacity: 0 }]}>
          {title}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
}

const styles = StyleSheet.create({});
