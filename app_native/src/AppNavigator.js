import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabsNavigation from "./TabsNavigation";
import PaymentGateway from "./screens/Pay2";
import Pay3 from "./screens/pay3";
import SuccessfulScreen from "./screens/sucessfullScreen";
import SettleScreen from "./screens/SettleScreen";
import Preview from "./screens/Preview";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={TabsNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="pay"
        component={PaymentGateway}
        options={{
          // headerShown: false,
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="pay3"
        component={Pay3}
        options={{
          // headerShown: false,
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="success"
        component={SuccessfulScreen}
        options={{
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="settle"
        component={SettleScreen}
        options={{
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "#fff",
          // headerShown: false,
        }}
      />
      <Stack.Screen
        name="preview"
        component={Preview}
        options={{
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "#fff",
          // headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
