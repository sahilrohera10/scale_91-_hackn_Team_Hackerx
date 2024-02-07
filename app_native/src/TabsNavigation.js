import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import { Feather } from "@expo/vector-icons";
import Pay2 from "./screens/Pay2";
import Contri from "./screens/Contri";
import Preview from "./screens/Preview";

const Tab = createBottomTabNavigator();

export default function TabsNavigation() {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "#262626",
        },
        keyboardHidesTabBar: true,
        tabBarActiveTintColor: "#EEC050",
        tabBarInactiveTintColor: "#fff",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Analytics") {
            iconName = "bar-chart";
          } else if (route.name === "Voice") {
            iconName = "mic";
          } else if (route.name === "Contri") {
            iconName = "users";
          } else if (route.name === "History") {
            iconName = "list";
          }

          return <Feather name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        options={{
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#121212",
          },
          title: "Welcome Sahil !!",
          tabBarLabel: "Home",
          tabBarLabelStyle: { fontSize: 13 },
        }}
        component={Home}
      />
      <Tab.Screen
        name="Analytics"
        options={{
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#121212",
          },
          // title: "Welcome Sahil !!",
          tabBarLabel: "Analytics",
          tabBarLabelStyle: { fontSize: 13 },
        }}
        component={Pay2}
      />
      <Tab.Screen
        name="Voice"
        options={{
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#121212",
          },
          title: "Voice Payments",
          tabBarLabel: "Voice",
          tabBarLabelStyle: { fontSize: 13 },
        }}
        component={Home}
      />
      <Tab.Screen
        name="Contri"
        options={{
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#121212",
          },
          title: "Contri Rooms",
          tabBarLabel: "Contri",
          tabBarLabelStyle: { fontSize: 13 },
        }}
        component={Contri}
      />
      <Tab.Screen
        name="History"
        options={{
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#121212",
          },
          // title: "Welcome Sahil !!",
          tabBarLabel: "History",
          tabBarLabelStyle: { fontSize: 13 },
        }}
        component={Preview}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
