import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Clicker from "./app/screens/clicker/clicker";
import Menu from "./app/screens/menu/menu";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Clicker" component={Clicker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
