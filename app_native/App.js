import AppNavigator from "./src/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-native-paper";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Provider>
          <AppNavigator />
        </Provider>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 15,
  },
});
