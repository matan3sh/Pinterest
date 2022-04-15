import {
  View,
  Image,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useAspectRatio } from "../hooks/useAspectRatio";

interface IProps {
  image: string;
  title: string;
  pinId: string;
}

export function Pin({ title, image, pinId }: IProps) {
  const navigation = useNavigation();
  const ratio = useAspectRatio(image, Image);

  const onLike = () => {
    console.log("Like");
  };

  const goToPin = () => {
    navigation.navigate("Pin", { id: pinId });
  };

  return (
    <TouchableOpacity onPress={goToPin} style={styles.pin}>
      <View>
        <Image
          source={{ uri: image }}
          style={[styles.image, { aspectRatio: ratio }]}
        />
        <Pressable onPress={onLike} style={styles.heartBtn}>
          <AntDesign name="hearto" size={16} color="black" />
        </Pressable>
      </View>

      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pin: {
    width: "100%",
    padding: 4,
  },
  title: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "600",
    margin: 5,
    color: "#181818",
  },
  image: {
    width: "100%",
    borderRadius: 15,
  },
  heartBtn: {
    backgroundColor: "#D3CFD4",
    position: "absolute",
    bottom: 10,
    right: 10,
    padding: 5,
    borderRadius: 50,
  },
});
