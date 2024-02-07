// CreateContriRoomScreen.js
import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Modal, Portal, Button, PaperProvider } from "react-native-paper";
// import Box from "@mui/material/Box";
import RNPickerSelect from "react-native-picker-select";
import { TextInput } from "react-native-paper";
import MultiSelect from "react-native-multiple-select";
import axios from "axios";

const items = [
  {
    upi_id: "92iijs7yta",
    name: "Sahil Arora",
  },
  {
    upi_id: "a0s0a8ssbsd",
    name: "Yash Singhal",
  },
  {
    upi_id: "16hbajsabsd",
    name: "Yash Raj Hans",
  },
];

const Contri = ({ navigation }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const multiSelectRef = useRef(null);

  const onSelectedItemsChange = (mem) => {
    // Map selected items to include both id and name
    const selectedItemsWithNames = mem.map((upi_id) =>
      items.find((item) => item.upi_id === upi_id)
    );
    setSelectedItems(selectedItemsWithNames);
    console.log("items", selectedItemsWithNames);
  };

  const [text, setText] = React.useState("");

  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    height: "60%",
  };

  const [contributionRoomsData, setContributionRoomsData] = useState();

  const callContri = async () => {
    try {
      // Make the GET request using fetch
      const response = await fetch(
        "http://192.168.0.100:8001/getContri/ongoing"
      );

      // Check if the response status is OK (200)
      if (response.ok) {
        // Parse the response body as JSON
        const data = await response.json();

        // Handle the response
        console.log("Server Response:", data.data);

        // Set the data using setContributionRoomsData
        setContributionRoomsData(data.data);
      } else {
        // If the response status is not OK, throw an error
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
      // You may choose to handle the error differently
    }
  };

  useEffect(() => {
    callContri();
  }, []);

  const addRandomItemToFirstIndex = async () => {
    // const newItem = {
    //   id: Math.random().toString(36).substring(7),
    //   name: text,
    //   members: Math.floor(Math.random() * 10) + 1, // Random number of members (1 to 10)
    // };

    // // Add the new item to the 0th index of the array
    // const updatedData = [newItem, ...contributionRoomsData];
    // setContributionRoomsData(updatedData);
    // console.log("Updated Data:", updatedData);

    // const apiUrl = "http://192.168.76.114/createContri";

    const data = {
      contri_name: text,
      member: selectedItems,
    };

    try {
      // Make the POST request using Axios
      const response = await axios.post(
        "http://192.168.76.114:8001/createContri",
        data
      );

      // Handle the response
      console.log("Server Response:", response);

      // Return the data if needed
      // return response.data;
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
      throw error; // You may choose to handle the error differently
    }
  };

  const gotosettle = () => {
    navigation.navigate("settle");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.createButton} onPress={showModal}>
        <Text style={styles.buttonText}>Create Contri Room</Text>
      </TouchableOpacity>
      {/* Add other content for your screen below */}
      <View style={{ height: "43%", marginTop: 30 }}>
        <Text style={[styles.userName, { marginBottom: 10, color: "#EEC050" }]}>
          Ongoing contri rooms
        </Text>
        <FlatList
          data={contributionRoomsData}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={gotosettle}
              style={styles.contributionRoomItem}
            >
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
                  {item.contri_name}
                </Text>
                <Text style={{ color: "#EEC050" }}>Total: $20</Text>
              </View>
              {/* Display other contribution room details */}
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item._id}
        />
      </View>
      <View style={{ height: "43%", marginTop: 10 }}>
        <Text style={[styles.userName, { marginBottom: 10, color: "#EEC050" }]}>
          Settled contri rooms
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
                  {item.contri_name}
                </Text>
                <Text style={{ color: "#EEC050" }}>Total: $20</Text>
              </View>
              {/* Display other contribution room details */}
            </View>
          )}
          keyExtractor={(item) => item._id}
        />
      </View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          {/* <Box sx={{ minWidth: 120 }}> */}
          <Text>Create Contri Room</Text>
          <TextInput
            label="Contri Room Name"
            value={text}
            onChangeText={(text) => setText(text)}
          />
          <View style={{ flex: 1 }}>
            <MultiSelect
              hideTags
              items={items}
              uniqueKey="upi_id"
              ref={multiSelectRef}
              onSelectedItemsChange={onSelectedItemsChange}
              selectedItems={selectedItems.map((item) => item.upi_id)} // Pass only ids to the MultiSelect component
              selectText="Pick members"
              searchInputPlaceholderText="Search Items..."
              onChangeInput={(text) => console.log(text)}
              tagRemoveIconColor="#CCC"
              tagBorderColor="#CCC"
              tagTextColor="#CCC"
              selectedItemTextColor="#CCC"
              selectedItemIconColor="#CCC"
              itemTextColor="#000"
              displayKey="name"
              searchInputStyle={{ color: "#CCC" }}
              submitButtonColor="#CCC"
              submitButtonText="Submit"
            />
            <View>
              {multiSelectRef.current &&
                multiSelectRef.current.getSelectedItemsExt(selectedItems)}
            </View>
          </View>
          {/* </Box> */}
          <TouchableOpacity
            style={styles.createButton}
            onPress={addRandomItemToFirstIndex}
          >
            <Text style={styles.buttonText}>Create Contri Room</Text>
          </TouchableOpacity>
        </Modal>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212", // Set your desired background color
    padding: 20,
  },
  createButton: {
    width: "100%",
    backgroundColor: "#262626",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  contributionRoomItem: {
    backgroundColor: "#262626", // Dark gray background
    padding: 16, // Spacing around the content
    borderRadius: 8, // Rounded corners
    marginBottom: 8, // Margin between items
  },
});

export default Contri;
