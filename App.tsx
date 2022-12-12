import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [catImg, setCatImg] = useState(
    "https://purr.objects-us-east-1.dream.io/i/lcwJe.jpg"
  );

  const getCat = () => {
    fetch("https://aws.random.cat/meow")
      .then((resp) => resp.json())
      .then((data) => setCatImg(data.file));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cat Generator</Text>
      <Image style={styles.img} source={{ uri: catImg }}></Image>
      <Button onPress={getCat} title="New Cat" color="#841584" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  img: {
    width: "80%",
    height: "70%",
    borderRadius: 10,
  },
});
