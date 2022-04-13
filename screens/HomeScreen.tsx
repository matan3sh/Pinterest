import { ScrollView, StyleSheet } from "react-native";

import { Pin } from "../components/Pin";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

import pins from "../assets/data/pins";

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {pins.map((pin) => (
          <Pin title={pin.title} image={pin.image} key={pin.id} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
