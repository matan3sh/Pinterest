import { ScrollView, StyleSheet, View } from "react-native";

import { Pin as PinType } from "../screens/PinScreen";
import { Pin } from "./Pin";

interface IProps {
  pins: PinType[];
}

export function MasonryList({ pins }: IProps) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.column}>
          {pins
            .filter((_, index) => index % 2 === 0)
            .map((pin) => (
              <Pin
                title={pin.title}
                image={pin.image}
                pinId={pin.id}
                key={pin.id}
              />
            ))}
        </View>

        <View style={styles.column}>
          {pins
            .filter((_, index) => index % 2 === 1)
            .map((pin) => (
              <Pin
                title={pin.title}
                image={pin.image}
                pinId={pin.id}
                key={pin.id}
              />
            ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  column: {
    flex: 1,
  },
});
