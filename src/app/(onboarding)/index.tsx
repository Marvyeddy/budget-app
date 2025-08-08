import { TouchableOpacity, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import AppSafeView from "@/components/AppSafeView";
import { Circuit } from "@/assets/icons/icon";
import GradientHeader from "@/components/GradientHeader";
import Button from "@/components/Button";
import { ChevronRight } from "lucide-react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { currencies } from "@/constants/data";
import { Currency } from "@/types";
import CurrencySelector from "@/components/CurrencySelector";
import { useRouter } from "expo-router";

export default function IncomeSelector() {
  // store all currencies
  const [currencyList] = useState<Currency[]>(currencies);
  // store selected currency separately
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(
    currencies[0]
  );
  const [isVisible, setIsVisible] = useState(false);
  const [amount, setAmout] = useState<string>("");
  const router = useRouter();

  return (
    <AppSafeView>
      <KeyboardAwareScrollView
        className="flex-1"
        contentContainerStyle={{
          paddingBottom: 10,
        }}
        keyboardShouldPersistTaps="handled"
        enableOnAndroid={true}
        extraScrollHeight={20}
      >
        {/* HEADER */}
        <View className="mt-[20px] mb-[76px] flex-row gap-[8px] items-center self-center">
          <Circuit />
          <GradientHeader
            title="Setting things up..."
            style={{
              textTransform: "uppercase",
              fontSize: 12,
              letterSpacing: 0.12,
              fontFamily: "GeistNormal",
            }}
          />
        </View>

        <Text className="text-center font-medium text-[24px] tracking-[-0.04] text-primary-black mb-[32px]">
          How much do you {"\n"} earn per month?
        </Text>

        {/* INPUT */}
        <View className="w-[335px] flex-row items-end justify-between mx-auto bg-grey-200/90 h-[76px] rounded-[12px] p-3 gap-[10px] mb-[95px]">
          <TouchableOpacity
            className="py-1 px-2 rounded-xl bg-white gap-2 flex-row items-center"
            onPress={() => setIsVisible(!isVisible)}
          >
            <Text>{selectedCurrency.flag}</Text>
            <Text className="font-medium">{selectedCurrency.symb}</Text>
          </TouchableOpacity>

          <TextInput
            placeholder="0"
            className="flex-1 font-light text-[40px] h-[52px] py-0 text-center"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmout}
          />

          <View>
            <Text className="text-[14px] font-medium opacity-50">.00</Text>
          </View>
        </View>

        {/* show currency list */}
        {isVisible && (
          <CurrencySelector
            selectedCurrency={selectedCurrency}
            currency={currencyList}
            setCurrency={(newCurrency) => {
              setSelectedCurrency(newCurrency);
              setIsVisible(false);
            }}
          />
        )}

        <Button
          variant="blue"
          disabled={!amount}
          className="disabled:bg-primary-blue/60"
          onPress={() => router.push("/(onboarding)/create-budget")}
        >
          <Text className="text-white">What's next</Text>
          <ChevronRight size={16} color={"#FFFFFF80"} />
        </Button>

        <Text className="w-[311px] mx-auto text-center mt-[23px] text-grey-100">
          It’s okay to use an estimate. You can always update your earnings each
          month.
        </Text>
      </KeyboardAwareScrollView>
    </AppSafeView>
  );
}
