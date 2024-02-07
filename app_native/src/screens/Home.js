import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

// import { TouchableOpacity } from "react-native-gesture-handler";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import card from "../../assets/creditcard.png";

// Create sample data
const latestTransactionsData = [
  { id: 1, amount: 100, date: "2024-02-05", to: "Sahil" },
  { id: 2, amount: 50, date: "2024-02-04", to: "Yash" },
  { id: 3, amount: 100, date: "2024-02-05", to: "Aditya" },
  { id: 4, amount: 50, date: "2024-02-04", to: "Jain" },
  { id: 5, amount: 100, date: "2024-02-05", to: "Arora" },
  { id: 6, amount: 50, date: "2024-02-04", to: "Arora" },
  // Add more transactions as needed
];

const contributionRoomsData = [
  { id: 1, name: "Trip to Goa", members: 4 },
  { id: 2, name: "House Rent", members: 2 },
  { id: 3, name: "Trip to Goa", members: 4 },
  //   { id: 4, name: "House Rent", members: 2 },
];

// Define the HomeScreen component
const Home = ({ navigation }) => {
  const navigateToNextScreen = () => {
    navigation.navigate("pay");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Carousel for Ads */}
      {/* <Text style={styles.userName}> Welcome Sahil !!</Text> */}
      <Image source={card} style={styles.fullWidthImage} />

      {/* Square Buttons for Pay and Add Contribution Group */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={navigateToNextScreen}
          style={styles.squareButton}
        >
          <MaterialIcons name="send" size={20} color="#262626" />
          <Text style={styles.buttonText}>Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.squareButton}>
          <MaterialIcons name="group-add" size={20} color="#262626" />
          <Text style={styles.buttonText}>Contri</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.squareButton}>
          <MaterialIcons name="send" size={20} color="#262626" />
          <Text style={styles.buttonText}>Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.squareButton}>
          <MaterialIcons name="group-add" size={20} color="#262626" />
          <Text style={styles.buttonText}>Contri</Text>
        </TouchableOpacity>
      </View>

      {/* Horizontal FlatList for Latest UPI Transactions */}
      <Text style={[styles.userName, { marginBottom: 10, color: "#EEC050" }]}>
        Recent Transactions
      </Text>
      <FlatList
        data={latestTransactionsData}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <Text style={styles.transactionText}>{item.amount}</Text>
            <Text style={styles.transactionText}>{item.to}</Text>
            {/* Display other transaction details */}
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      {/* Vertical FlatList for Ongoing Contribution Rooms */}
      <View style={{ height: "35%" }}>
        <Text style={[styles.userName, { marginBottom: 10, color: "#EEC050" }]}>
          Ongoing Ledger rooms
        </Text>
        <FlatList
          data={contributionRoomsData}
          renderItem={({ item }) => (
            <View style={styles.contributionRoomItem}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}
                >
                  {item.name}
                </Text>
                <Text style={{ color: "#EEC050" }}>Total: $20</Text>
              </View>
              {/* Display other contribution room details */}
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    // paddingTop: 10,
  },
  carouselContainer: {
    height: 200,
    // Add additional styles as needed
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  squareButton: {
    backgroundColor: "#EEC050",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    height: 60,
    width: 60,
  },
  buttonText: {
    color: "#262626",
    marginTop: 2,
  },
  transactionItem: {
    width: 70, // Adjust the width as needed
    height: 70, // Circular frame dimensions
    borderRadius: 60, // Half of the width/height for a circular shape
    backgroundColor: "#262626", // Example background color
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5, // Adjust the horizontal margin as needed
  },
  transactionText: {
    color: "#fff",
    textAlign: "center",
  },
  contributionRoomItem: {
    backgroundColor: "#262626", // Dark gray background
    padding: 16, // Spacing around the content
    borderRadius: 8, // Rounded corners
    marginBottom: 8, // Margin between items
  },
  bottomTabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: "#121212",
    // Add additional styles as needed
  },
  fullWidthImage: {
    width: "100%",
    height: "28%",
    borderRadius: 20,
    marginTop: 20,
  },
  userName: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10,
    marginTop: 10,
  },
});

export default Home;
