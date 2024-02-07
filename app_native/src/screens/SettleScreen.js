import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

const SettleScreen = ({ navigation }) => {
  const gotopreview = () => {
    navigation.navigate("preview");
  };

  // Dummy data for contri group members
  const contriGroupMembers = [
    {
      id: 1,
      name: "John Doe",
      fromUpiId: "john.doe@upi",
      toUpiId: "recipient1@upi",
      amount: 50.0,
    },
    {
      id: 2,
      name: "Jane Smith",
      fromUpiId: "jane.smith@upi",
      toUpiId: "recipient2@upi",
      amount: 30.0,
    },
    {
      id: 3,
      name: "Bob Johnson",
      fromUpiId: "bob.johnson@upi",
      toUpiId: "recipient3@upi",
      amount: 20.0,
    },
    // Add more members as needed
  ];

  const [selectedMember, setSelectedMember] = useState(null);

  const renderMemberDetails = (member) => {
    return (
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsLabel}>From UPI ID:</Text>
        <Text style={styles.detailsText}>{member.fromUpiId}</Text>

        <Text style={styles.detailsLabel}>To UPI ID:</Text>
        <Text style={styles.detailsText}>{member.toUpiId}</Text>

        <Text style={styles.detailsLabel}>Amount:</Text>
        <Text style={styles.detailsText}>{`Rs. ${member.amount.toFixed(
          2
        )}`}</Text>
      </View>
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedMember(item)}>
      <View
        style={[
          styles.memberItem,
          {
            backgroundColor:
              selectedMember?.id === item.id ? "#EEC050" : "black",
          },
        ]}
      >
        <Text
          style={[
            styles.memberName,
            { color: selectedMember?.id === item.id ? "black" : "white" },
          ]}
        >
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.groupTitle}>JIMS GROUP</Text>

      <View style={styles.membersListContainer}>
        <Text style={styles.membersListTitle}>Members</Text>
        <FlatList
          data={contriGroupMembers}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

      {selectedMember && renderMemberDetails(selectedMember)}

      <TouchableOpacity onPress={gotopreview} style={styles.settleUpButton}>
        <Text style={styles.settleUpButtonText}>Settle Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#1a1a1a",
    width: "100%",
    justifyContent: "center",
  },
  groupTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#EEC050",
    marginBottom: 20,
    textAlign: "center",
  },
  membersListContainer: {
    marginBottom: 20,
  },
  membersListTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  memberItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  memberName: {
    fontSize: 16,
  },
  detailsContainer: {
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 20,
    width: "100%",
    marginBottom: 20,
  },
  detailsLabel: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 5,
  },
  detailsText: {
    color: "#fff",
    fontSize: 18,
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

export default SettleScreen;
