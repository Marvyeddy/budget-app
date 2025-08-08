import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import AppSafeView from "@/components/AppSafeView";
import { Star, Wallet } from "@/assets/icons/icon";
import { budget } from "@/constants/data";

import Button from "@/components/Button";
import { CheckCheckIcon, CircleFadingPlus } from "lucide-react-native";
import Budget from "@/components/Budget";
import { BlurView } from "expo-blur";
import GradientText from "@/components/GradientText";
import ModalShort from "@/components/ModalShort";

export default function CreateBudget() {
  const [active, setActive] = useState<"Category" | "Budget">("Category");
  const [visible, setVisible] = useState(false);
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

            <Button
              variant="white"
              className="w-[173px]"
              onPress={() => setVisible(true)}
            >
              <CircleFadingPlus size={16} opacity={0.5} />
              <Text className="font-medium text-[14px] leading-none">
                Add another budget
              </Text>
            </Button>
          </View>
        </View>

        <ModalShort
          style={{ height: 229, padding: 20 }}
          visible={visible}
          onclose={() => setVisible(false)}
        >
          <View className="flex-row gap-[10px] mb-[16px]">
            <Button
              variant={active === "Category" ? `grey` : `transparent`}
              onPress={() => setActive("Category")}
            >
              <GradientText title="Category" />
            </Button>
            <Button
              variant={active === "Budget" ? `grey` : `transparent`}
              onPress={() => setActive("Budget")}
            >
              <GradientText title="Budget" />
            </Button>
          </View>

          {active === "Category" ? (
            <>
              <View className="p-[8px] gap-[10px] flex-row items-center mb-[16px]">
                <Text>✈️</Text>
                <TextInput
                  placeholder={"Enter category"}
                  placeholderTextColor={"white"}
                  className="text-[20px] text-white py-0 font-normal"
                />
              </View>

              <ScrollView>
                {Array.from({ length: 6 }).map((_, index) => (
                  <View
                    key={index}
                    className="flex-row items-center gap-[10px] mb-[16px]"
                  >
                    <Star />
                    <GradientText title="Extravaganza" />
                  </View>
                ))}
              </ScrollView>
            </>
          ) : (
            <>
              <View className="flex-row justify-between items-end mb-[16px]">
                <Text className="text-white opacity-50 text-[14px] font-medium">
                  £
                </Text>

                <TextInput
                  placeholder="0"
                  placeholderTextColor={"white"}
                  className="flex-1 text-center text-[40px] text-white"
                  keyboardType="numeric"
                />

                <Text className="text-white opacity-50 text-[14px] font-medium">
                  12%
                </Text>
              </View>

              <Button variant="dark" className="ml-auto">
                <CheckCheckIcon color={"white"} size={16} opacity={0.5} />
                <Text className="text-white">Save changes</Text>
              </Button>
            </>
          )}
        </ModalShort>
      </View>
    </AppSafeView>
  );
}

const styles = StyleSheet.create({});
