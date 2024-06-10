import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
  return (
    <Image
      source={{ uri: selectedImage }}
      style={styles.image}
      defaultSource={placeholderImageSource}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
