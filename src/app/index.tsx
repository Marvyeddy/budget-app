import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { ChevronRight } from "lucide-react-native";

import MaskedView from "@react-native-masked-view/masked-view";
import Button from "@/components/Button";
import { useRouter } from "expo-router";

export default function WelcomeScreen() {
  const router = useRouter();
  return (
    <View className="flex-1">
      <ImageBackground
        source={require("src/assets/images/welcome-image.png")}
        className="flex-1 justify-end"
      >
        <View className="h-[351px] pt-[65px] pb-5">
          <BlurView
            experimentalBlurMethod="dimezisBlurView"
            intensity={9}
            tint="default"
            style={StyleSheet.absoluteFill}
          />

          <LinearGradient
            colors={["#000014", "#000014"]}
            style={{
              borderRadius: 24,
              width: 351,
              padding: 20,
              paddingTop: 32,
              marginHorizontal: "auto",
            }}
          >
            <MaskedView
              maskElement={
                <Text className="font-medium text-[40px] tracking-[-0.04] text-center relative ">
                  Take control of your money
                </Text>
              }
            >
              <LinearGradient
                colors={["#999999", "#FFFFFF", "#CCCCCC"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  width: "100%",
                  height: 100,
                  marginBottom: 32,
                }}
              />
            </MaskedView>

            <View className="w-[311px] mx-auto flex-col">
              <Button
                variant="blue"
                onPress={() => router.push("/(onboarding)")}
              >
                <Text className="text-white font-medium text-base text-center">
                  Get started
                </Text>
                <ChevronRight color="white" size={16} />
              </Button>

              <Text className="text-white opacity-80 text-center leading-[1.5] mt-6">
                Don’t worry, we don’t save your data until you ask us to. Your
                finances remain on your device.
              </Text>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </View>
  );
}
