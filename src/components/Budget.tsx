import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { clsx } from "clsx";

type Budget = {
  id: string;
  title: string;
  icon: string;
  percentage: string;
  amount: string;
};

type BudgetProps = {
  item: Budget;
  index: number;
};

export default function Budget({ item, index }: BudgetProps) {
  return (
    <View
      className={clsx(
        "flex-row justify-between py-[20px] px-[16px] items-center",
        index !== 0 && "border-t border-['#0000000A']"
      )}
    >
      <View className="flex-row gap-[8px] items-center">
        <Text>{item.icon}</Text>
        <Text className="font-normal leading-none text-[16px] capitalize">
          {item.title}
        </Text>
      </View>

      <View className="flex-row gap-[20px] items-center">
        <Text className="font-medium text-[12px] opacity-50">
          {item.percentage}
        </Text>
        <Text className="text-[20px] font-normal">£{item.amount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
