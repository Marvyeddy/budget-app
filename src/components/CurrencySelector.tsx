import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { SearchIcon } from "lucide-react-native";
import GradientText from "./GradientText";
import { Currency } from "@/types";

type CurrencySelectorProps = {
  currency: Currency[];
  setCurrency: (selected: Currency) => void;
  selectedCurrency: Currency; // <-- pass from parent to know active
};

export default function CurrencySelector({
  currency,
  setCurrency,
  selectedCurrency,
}: CurrencySelectorProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCurrencies =
    searchTerm.trim() === ""
      ? currency
      : currency.filter(
          (item) =>
            item.abv.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.symb.toLowerCase().includes(searchTerm.toLowerCase())
        );

  return (
    <BlurView
      className="w-[270px] h-[356px] absolute"
      style={{
        borderRadius: 16,
        overflow: "hidden",
        top: 70,
        right: 20,
        zIndex: 3,
      }}
      intensity={45}
      experimentalBlurMethod="dimezisBlurView"
      tint="dark"
    >
      {/* Search Bar */}
      <View className="p-5 pb-3 border-b border-white/10">
        <View className="flex-row items-center py-1 rounded-md gap-[10px]">
          <SearchIcon size={16} color="#FFFFFF80" />
          <TextInput
            placeholder="Search currency"
            placeholderTextColor="rgba(255,255,255,0.5)"
            className="flex-1 text-white font-normal"
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
        </View>
      </View>

      {/* Currency List */}
      <ScrollView className="px-[20px] pt-1" indicatorStyle="white">
        {filteredCurrencies.map((item) => {
          const isActive = item.id === selectedCurrency.id;

          const ItemWrapper = ({ children }: { children: React.ReactNode }) =>
            isActive ? (
              <LinearGradient
                colors={["rgba(255,255,255,0.12)", "rgba(255,255,255,0)"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ borderRadius: 8 }}
              >
                {children}
              </LinearGradient>
            ) : (
              <>{children}</>
            );

          return (
            <ItemWrapper key={item.id}>
              <Pressable
                className="flex-row p-2 pt-[8px]  items-center gap-[10px]"
                onPress={() => setCurrency(item)}
              >
                <Text className="text-[20px]">{item.flag}</Text>
                <GradientText
                  title={item.abv}
                  className="text-[20px]"
                  isActive={isActive}
                />
              </Pressable>
            </ItemWrapper>
          );
        })}
      </ScrollView>
    </BlurView>
  );
}
