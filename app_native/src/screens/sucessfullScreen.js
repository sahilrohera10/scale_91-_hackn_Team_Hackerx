import React, { useEffect } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import LottieView from "lottie-react-native";
import { LinearGradient } from "expo-linear-gradient";

const SuccessfulScreen = () => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animationContainer, { opacity: fadeAnim }]}>
        <LottieView
          source={require("../../assets/sucessful.json")} // Replace with the correct path
          autoPlay
          loop={true}
          style={styles.animation}
        />
      </Animated.View>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>Transaction Details:</Text>
        {/* Transaction details components */}
        <Text style={styles.detailsItem}>Date: February 5, 2024</Text>
        <Text style={styles.detailsItem}>Amount: Rs.100.00</Text>
        <Text style={styles.detailsItem}>Recipient: John Doe</Text>
        <Text style={styles.detailsItem}>Transaction ID: 123456789</Text>

        {/* Additional details */}
        <Text style={styles.detailsItem}>Payment Method: UPI</Text>
        <Text style={styles.detailsItem}>Status: Completed</Text>
        <Text style={styles.detailsItem}>Reference Number: ABCD1234</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 20,
    backgroundColor: "#121212",
  },
  animationContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  animation: {
    width: 300,
    height: 300,
  },
  detailsContainer: {
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 20,
    marginTop: 40,
  },
  detailsText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#EEC050",
    marginBottom: 10,
  },
  detailsItem: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 5,
  },
});

export default SuccessfulScreen;
