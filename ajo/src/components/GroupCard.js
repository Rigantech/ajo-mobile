import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Text from "../components/Text";
import { ProgressBar } from "react-native-paper";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
const GroupCard = () => {
  const progress = 0.8; // Progress value between 0 and 1
  return (
    <View style={styles.card}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.iconWrapper}>
          <Image
            source={require("../../assets/group-pic.png")} // Replace with your icon URL
            style={styles.icon}
          />
        </View>
        <Text style={styles.groupName}>Queen Ladies Club</Text>
        <TouchableOpacity style={styles.contributeButton}>
          <Text style={styles.contributeText}>+ Contribute</Text>
        </TouchableOpacity>
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        <Text style={styles.walletLabel}>Money in group wallet</Text>

        <View style={styles.contributionInfo}>
          <Text style={styles.walletAmount}>#80,000.00</Text>
          <Text style={styles.contributionPercent}>80% Contributed</Text>
        </View>
        {/* Progress Bar */}
        <View style ={styles.progressContainer}>
          {/* <MaterialCommunityIcons name="run" size={24} color="black" /> */}
          <ProgressBar
            progress={progress}
            color="#FFB800"
            style={styles.progressBar}
          />
          {/* <Ionicons name="medal-outline" size={24} color="black" /> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#6C44FB",
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconWrapper: {
    backgroundColor: "#FFF",
    borderRadius: 100,
    padding: 4,
  },
  icon: {
    width: 30,
    height: 30,
  },
  groupName: {
    fontSize: 18,
    color: "#FFF",
    flex: 1,
    fontFamily: "OpenSans_700Bold",
    marginLeft: 5,
  },
  contributeButton: {
    backgroundColor: "#FFF",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  contributeText: {
    fontSize: 14,
    color: "#6C44FB",
    fontFamily: "OpenSans_600SemiBold",
  },
  content: {
    marginTop: 16,
  },
  walletLabel: {
    fontSize: 14,
    color: "#FFF",
    opacity: 0.8,
  },
  walletAmount: {
    fontSize: 24,
    fontFamily: "OpenSans_700Bold",
    color: "#FFF",
    marginVertical: 8,
  },
  contributionInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contributionPercent: {
    fontSize: 14,
    color: "#FFF",
    fontFamily: "OpenSans_600SemiBold",
  },
  progressBar: {
    marginTop: 8,
    height: 4,
  },
  progressContainer: {
    
  }
});

export default GroupCard;
