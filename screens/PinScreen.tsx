import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

import { useAspectRatio } from "../hooks/useAspectRatio";

import pins from "../assets/data/pins";

interface Pin {
  title: string;
  image: string;
  id: string;
}

export default function PinScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const [pin, setPin] = useState<Pin | null>(null);

  const insets = useSafeAreaInsets();
  const ratio = useAspectRatio(pin?.image || "", Image);

  useEffect(() => {
    if (route.params) {
      const pinId = route.params?.id;
      const currentPin = pins.find((pin) => pin.id === pinId);
      if (currentPin) setPin(currentPin);
    }
  }, [route.params]);

  const goBack = () => {
    navigation.goBack();
  };

  if (!pin) {
    return <Text>Pin not found</Text>;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />

      <View style={styles.container}>
        <Image
          source={{ uri: pin.image }}
          style={[styles.image, { aspectRatio: ratio }]}
        />
        <Text style={styles.title}>{pin.title}</Text>
      </View>

      <Pressable
        style={[styles.backBtn, { top: insets.top + 20 }]}
        onPress={goBack}>
        <Ionicons name="chevron-back" size={35} color="white" />
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "black",
  },
  container: {
    height: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  image: {
    width: "100%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  title: {
    margin: 10,
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 35,
  },
  backBtn: {
    position: "absolute",
    left: 10,
  },
});
