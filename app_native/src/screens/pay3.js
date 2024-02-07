import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";

const Pay3 = ({ navigation }) => {
  const [paymentType, setPaymentType] = useState("Personal");
  const [contriroom, setContrirrom] = useState();

  const gotosuccess = () => {
    navigation.navigate("success");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Payment Details</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput style={styles.input} placeholder="Enter Name" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Amount:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Amount"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Remark:</Text>
        <TextInput style={styles.input} placeholder="Enter Remark" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Payment Type:</Text>
        <Picker
          style={styles.picker}
          selectedValue={paymentType}
          onValueChange={(itemValue) => setPaymentType(itemValue)}
        >
          <Picker.Item label="Personal" value="Personal" />
          <Picker.Item label="Contri" value="Contri" />
        </Picker>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Select Contri Room:</Text>
        <Picker
          style={styles.picker}
          selectedValue={paymentType}
          onValueChange={(itemValue) => setPaymentType(itemValue)}
        >
          <Picker.Item label="JIMS HACK" value="JIMS HACK" />
          <Picker.Item label="RJ HACK" value="RJ HACK" />
        </Picker>
      </View>

      <TouchableOpacity onPress={gotosuccess} style={styles.payNowButton}>
        <Text style={styles.payNowText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 20,
    paddingTop: 85,
    backgroundColor: "#121212",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
    width: "100%",
  },
  label: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#333",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
    width: "100%",
  },
  picker: {
    backgroundColor: "#333",
    color: "#fff",
    borderRadius: 5,
    width: "100%",
  },
  payNowButton: {
    backgroundColor: "#EEC050",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
    width: "100%",
  },
  payNowText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Pay3;
