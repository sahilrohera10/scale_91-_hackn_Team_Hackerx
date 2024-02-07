import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const PaymentGateway = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showDialPad, setShowDialPad] = useState(false);

  const handleNumberPress = (number) => {
    setPhoneNumber((prevNumber) => prevNumber + number);
  };

  const gotopay3 = () => {
    navigation.navigate("pay3");
  };

  const handlePayPress = () => {
    // Implement your payment logic here
    console.log(`Payment initiated for ${phoneNumber}`);
    setShowDialPad(false); // Hide the dial pad after payment is initiated
    gotopay3();
  };

  const handleClearPress = () => {
    setPhoneNumber("");
    setShowDialPad(false); // Hide the dial pad after clearing the input
  };

  const handleInputFocus = () => {
    setShowDialPad(true); // Show the dial pad when the input field is focused
  };

  return (
    <LinearGradient colors={["#121212", "#000000"]} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        {/* <Text style={styles.headerText}>Professional Payment Gateway</Text> */}
      </View>

      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Phone Number"
            placeholderTextColor="#888"
            keyboardType="numeric"
            value={phoneNumber}
            onFocus={handleInputFocus}
            onChangeText={setPhoneNumber}
          />
        </View>

        <View style={styles.payButtonContainer}>
          <TouchableOpacity
            // onPress={gotopay3}
            style={styles.payButton}
            onPress={handlePayPress}
          >
            <Text style={styles.payButtonText}>Pay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    width: "100%",
  },
  inputContainer: {
    marginBottom: 20,
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    width: "100%",
    textAlign: "center",
    fontSize: 16,
    color: "#fff",
    borderColor: "#555",
    backgroundColor: "#333",
  },
  dialPadContainer: {
    width: "100%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    width: "100%",
  },
  button: {
    flex: 1,
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#555",
    backgroundColor: "#333",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  payButtonContainer: {
    marginTop: 20,
    width: "100%",
  },
  payButton: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#555",
    backgroundColor: "#333",
  },
  payButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

PaymentGateway.navigationOptions = ({ navigation }) => ({
  tabBarVisible: navigation.state.index === 0, // Show tabs only when on the first tab (Home)
});

export default PaymentGateway;
