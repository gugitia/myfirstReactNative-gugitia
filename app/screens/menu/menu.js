import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Menu({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Proxima tela</Text>
      <StatusBar style="auto" />
      <TouchableOpacity
        onPress={() => navigation.navigate("Clicker")}
        style={styles.button}
      >
        <Text>Botao</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "yellow",
    marginTop: 20,
    padding: 20,
  },
});
