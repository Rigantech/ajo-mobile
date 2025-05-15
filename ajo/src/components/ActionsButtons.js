import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Text from "./Text"; // Assuming you have a custom Text component
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const ActionButtons = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.actionButton}>
        <Image
          source={require("../../assets/piggy-icon.png")}
          style={styles.icon}
        />
        <Text style={styles.actionText}>Fund{"\n  "}Wallet</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <Image
          source={require("../../assets/add-team.png")}
          style={styles.icon}
        />
        <Text style={styles.actionText}>Create{"\n  "} new group</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <Image
          source={require("../../assets/new-group.png")}
          style={styles.icon}
        />
        <Text style={styles.actionText}>Join{"\n  "} new group</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between", // Space evenly between buttons
    alignItems: "center", // Center icons and text vertically
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#FFF",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  actionButton: {
    alignItems: "center", // Center icon and text horizontally
    flex: 1, // Ensure equal space for each button
  },
  actionText: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 8,
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 4, // Add some margin for vertical spacing
  },
});

export default ActionButtons;
