import { FlatList, Modal, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppSafeView from "@/components/AppSafeView";
import { Wallet } from "@/assets/icons/icon";
import { budget } from "@/constants/data";

import Button from "@/components/Button";
import { CircleFadingPlus } from "lucide-react-native";
import Budget from "@/components/Budget";
import { BlurView } from "expo-blur";
import GradientText from "@/components/GradientText";

export default function CreateBudget() {
  const [active, setActive] = useState<"Category" | "Budget">("Category");
  return (
    <AppSafeView>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <Text className="text-[24px] tracking-[-0.04] font-medium leading-none mt-[20px] mb-[32px]">
          Let’s create a monthly {"\n"}budget for you
        </Text>

        <View>
          <View className="flex-row gap-[8px] items-center ml-auto mb-[12px]">
            <Wallet />
            <Text className="text-grey-100">£1,410 Left</Text>
          </View>

          <View className="bg-grey-300 w-[335px] mx-auto rounded-[16px]">
            <FlatList
              data={budget}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => (
                <Budget item={item} index={index} />
              )}
            />

            <Button variant="white" className="w-[173px]">
              <CircleFadingPlus size={16} opacity={0.5} />
              <Text className="font-medium text-[14px] leading-none">
                Add another budget
              </Text>
            </Button>
          </View>
        </View>

        <Modal transparent animationType="slide">
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <BlurView
              tint="dark"
              intensity={40}
              experimentalBlurMethod="dimezisBlurView"
              style={{
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                height: 229,
                overflow: "hidden",
                padding: 20,
              }}
            >
              <View className="flex-row gap-[10px]">
                <Button
                  variant={active === "Category" ? `grey` : `transparent`}
                >
                  <GradientText title="Category" />
                </Button>
                <Button variant={active === "Budget" ? `grey` : `transparent`}>
                  <GradientText title="Budget" />
                </Button>
              </View>
            </BlurView>
          </View>
        </Modal>
      </View>
    </AppSafeView>
  );
}

const styles = StyleSheet.create({});
