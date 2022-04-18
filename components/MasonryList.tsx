import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";

import { Pin as PinType } from "../screens/PinScreen";
import { Pin } from "./Pin";

interface IProps {
  pins: PinType[];
}

export function MasonryList({ pins }: IProps) {
  const width = useWindowDimensions().width;
  const numColumns = Math.ceil(width / 350);

  return (
    <ScrollView>
      <View style={styles.container}>
        {Array.from(Array(numColumns)).map((_, colIndex) => (
          <View style={styles.column} key={colIndex}>
            {pins
              .filter((_, index) => index % numColumns === colIndex)
              .map((pin) => (
                <Pin
                  title={pin.title}
                  image={pin.image}
                  pinId={pin.id}
                  key={pin.id}
                />
              ))}
          </View>
        ))}
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
