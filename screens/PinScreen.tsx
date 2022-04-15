import { View, Text, StyleSheet, Image } from "react-native";

import pins from "../assets/data/pins";
import { useAspectRatio } from "../hooks/useAspectRatio";

export function PinScreen() {
  const pin = pins[0];

  const { ratio } = useAspectRatio(pin.image, Image);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: pin.image }}
        style={[styles.image, { aspectRatio: ratio }]}
      />
      <Text style={styles.title}>{pin.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
  },
  title: {},
});
