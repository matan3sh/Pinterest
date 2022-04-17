import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";

import { MasonryList } from "../components/MasonryList";

import pins from "../assets/data/pins";

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.icons}>
          <Feather name="share" size={24} color="black" style={styles.icon} />
          <Entypo
            name="dots-three-horizontal"
            size={24}
            color="black"
            style={styles.icon}
          />
        </View>

        <Image
          source={{
            uri: "https://avatars.githubusercontent.com/u/44439428?v=4",
          }}
          style={styles.image}
        />
        <Text style={styles.title}>Matan Shaviro</Text>
        <Text style={styles.subtitle}>123 Followers | 534 Followings</Text>
      </View>

      <MasonryList pins={pins} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  subtitle: {
    color: "#181818",
    fontWeight: "600",
    margin: 10,
  },
  image: {
    width: 200,
    aspectRatio: 1,
    borderRadius: 200,
    marginVertical: 10,
  },
  icons: {
    flexDirection: "row",
    alignSelf: "flex-end",
    padding: 10,
  },
  icon: {
    paddingHorizontal: 10,
  },
});
