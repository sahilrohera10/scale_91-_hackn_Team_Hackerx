// PreviewScreen.js
import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { PieChart } from "react-native-gifted-charts";

const Preview = ({ navigation }) => {
  const gotosuccess = () => {
    navigation.navigate("success");
  };

  const data = [
    { name: "sahil", upi_id: "12345678", amt: 300 },
    { name: "arora", upi_id: "12345678", amt: 200 },
    { name: "yrh", upi_id: "12345678", amt: 100 },
  ];

  const totalAmount = data.reduce((acc, item) => acc + item.amt, 0);
  const totalMembers = data.length;

  // Calculate average amount per person
  const avgAmtPerPerson = totalAmount / totalMembers;

  return (
    <View style={styles.container}>
      {/* Pie Chart */}
      <PieChart
        data={data.map((item) => ({ value: item.amt, name: item.name }))}
        radius={120}
        innerRadius={50}
        outerRadius={80}
        labelRadius={100}
        colors={["#FFD700", "#FF6347", "#20B2AA"]} // Add your preferred colors
      />

      {/* Total Amount and Average Amount per Person */}
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Total Amount: Rs.{totalAmount}</Text>
        <Text style={styles.summaryText}>
          Avg Amt per Person: Rs.{avgAmtPerPerson.toFixed(2)}
        </Text>
      </View>

      {/* FlatList of Cards */}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>Name: {item.name}</Text>
            <Text style={styles.cardText}>UPI ID: {item.upi_id}</Text>
            <Text style={styles.cardText}>Amount: Rs.{item.amt}</Text>
            {item.amt > avgAmtPerPerson ? (
              <Text style={[styles.cardText, { color: "#EEC050" }]}>
                Refund Amount: Rs.{item.amt - avgAmtPerPerson}
              </Text>
            ) : item.amt == avgAmtPerPerson ? (
              <Text style={[styles.cardText, { color: "#EEC050" }]}>
                Settled
              </Text>
            ) : (
              <>
                <Text style={[styles.cardText, { color: "#EEC050" }]}>
                  Payable Amount: Rs.{avgAmtPerPerson - item.amt}
                </Text>
                <TouchableOpacity
                  onPress={gotosuccess}
                  style={styles.settleUpButton}
                >
                  <Text style={styles.settleUpButtonText}>
                    Pay Rs.{avgAmtPerPerson - item.amt}
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#121212",
  },
  summaryContainer: {
    marginTop: 20,
  },
  summaryText: {
    fontSize: 16,
    marginBottom: 8,
    color: "#EEC050",
  },
  card: {
    backgroundColor: "#262626",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  cardText: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 8,
  },
  settleUpButton: {
    backgroundColor: "#EEC050",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  settleUpButtonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Preview;
