import { Modal, ModalProps, Pressable, StyleSheet, View } from "react-native";
import React, { ReactNode } from "react";
import { BlurView } from "expo-blur";

type ModalShortProps = {
  children: ReactNode;
  visible: boolean;
  onclose: () => void;
} & ModalProps;

export default function ModalShort({
  children,
  style,
  visible,
  onclose,
}: ModalShortProps) {
  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={onclose}
    >
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Pressable style={{ flex: 1 }} onPress={onclose} />
        <BlurView
          tint="dark"
          intensity={40}
          experimentalBlurMethod="dimezisBlurView"
          style={[
            style,
            {
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              overflow: "hidden",
            },
          ]}
        >
          {children}
        </BlurView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({});
