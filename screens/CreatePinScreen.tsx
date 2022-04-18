import React, { useState } from "react";
import { Button, Image, View, TextInput, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

export function CreatePinScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.75,
    });

    if (result.cancelled) {
      return;
    }

    const { uri: image } = result;

    setImage(image);
  };

  const onSubmit = () => {};

  return (
    <View style={styles.root}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && (
        <>
          <Image source={{ uri: image }} style={styles.image} />
          <TextInput
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
            style={styles.input}
          />
          <Button title="Create Pin" onPress={onSubmit} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 5,
    width: "100%",
    borderRadius: 5,
  },
});
