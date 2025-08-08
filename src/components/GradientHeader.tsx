import React from "react";
import { View, Text, TextProps } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

type GradientHeaderProps = {
  title: string;
} & TextProps;

export default function GradientHeader({
  title,
  style,
  className,
}: GradientHeaderProps) {
  return (
    <MaskedView
      maskElement={
        <Text
          style={[style, { backgroundColor: "transparent" }]}
          className={className}
        >
          {title}
        </Text>
      }
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#5c5c5c", "#d9d9d9", "#5c5c5c"]}
      >
        <Text style={[style, { opacity: 0 }]} className={className}>
          {title}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
}
