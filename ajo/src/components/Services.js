import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Text from "./Text"; // Assuming you have a custom Text component
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Services = () => {
  return (
    <View style={styles.container}>
      <Text>Services</Text>
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Image
            source={require("../../assets/solo-saving.png")}
            style={styles.icon}
          />
          <Text style={styles.actionText}>Solo Saving</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Image
            source={require("../../assets/money-bag.png")}
            style={styles.icon}
          />
          <Text style={styles.actionText}>Loan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Image
            source={require("../../assets/investment.png")}
            style={styles.icon}
          />
          <Text style={styles.actionText}>Investment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#FFF",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Space evenly between buttons
    alignItems: "center", // Center icons and text vertically
    paddingVertical: 10,
    paddingHorizontal: 10,
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
    width: 40,
    height: 40,
    marginBottom: 4, // Add some margin for vertical spacing
    padding: 5,
    backgroundColor: "#F5F0FF",
    borderRadius: 4
  },
});

export default Services;
