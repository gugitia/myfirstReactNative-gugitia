import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Clicker({ navigation }) {
  const [number, setNumber] = useState(0);

  function incrementar() {
    return setNumber(number + 1);
  }

  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Olá Mundooo</Text>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={incrementar} style={styles.button}>
        <Text>Botao</Text>
      </TouchableOpacity>
      <Text style={styles.numero}>{number}</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
        <Text style={styles.numero}>Voltar</Text>
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
  numero: {
    marginTop: 40,
    color: "white",
  },
});
