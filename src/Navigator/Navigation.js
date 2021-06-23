import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home/Home";
import Ticket from "../screens/ticket/Ticket";
import Summary from "../screens/summary/Summary";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="ticket" component={Ticket} />
        <Stack.Screen name="summary" component={Summary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
