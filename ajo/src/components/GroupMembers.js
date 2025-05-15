import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Text from "../components/Text"; // Assuming you have a custom Text component
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";
const GroupMembers = () => {
  const members = [
    {
      name: "Bukky",
      status: "Paid",
      isPaid: true,
      image: require("../../assets/bukky.png"),
    },
    {
      name: "Grace",
      status: "Paid",
      isPaid: true,
      image: require("../../assets/bukky.png"),
    },
    {
      name: "Funmi",
      status: "Not paid",
      isPaid: false,
      image: require("../../assets/bukky.png"),
    },
  ];

  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Group members</Text>
        <TouchableOpacity>
          <Text style={styles.addMemberText}>Add a new member</Text>
        </TouchableOpacity>
      </View>

      {/* Members List */}
      {members.map((member, index) => (
        <View key={index} style={styles.memberRow}>
          <Image source={member.image} style={styles.memberImage} />
          <Text style={styles.memberName}>{member.name}</Text>
          <View style={styles.statusContainer}>
            <Text
              style={[
                styles.memberStatus,
                member.isPaid ? styles.paid : styles.notPaid,
              ]}
            >
              {member.status}
            </Text>
            <MaterialCommunityIcons
              name={member.isPaid ? "check-circle" : "close-circle"}
              size={20}
              color={member.isPaid ? "green" : "red"}
            />
          </View>
        </View>
      ))}

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerBtn}>
          <Text style={styles.footerText}>Contribution history</Text>
          <Entypo name="chevron-small-right" size={16} color="#6C6C6C" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerBtn}>
          <Text style={styles.footerText}>View more</Text>
          <Entypo name="chevron-small-right" size={16} color="#6C6C6C" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    marginVertical: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontFamily: "OpenSans_600SemiBold",
    color: "#000",
  },
  addMemberText: {
    fontSize: 14,
    color: "#6C44FB",
    backgroundColor: "#F5F0FF",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  memberRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  memberImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  memberName: {
    fontSize: 14,
    flex: 1,
    // fontFamily: "OpenSans_600SemiBold",
    color: "#000",
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  memberStatus: {
    fontSize: 14,
    marginRight: 4,
    // fontFamily: "OpenSans_600SemiBold",
    color: "",
  },
  paid: {
    color: "#5B6B86",
  },
  notPaid: {
    color: "#5B6B86",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#EEE",
    paddingTop: 8,
  },
  footerText: {
    fontSize: 14,
    color: "#6C6C6C",
  },
  footerBtn: {
    flexDirection: "row",
    alignItems: "center",
    alignItems: "center"
  }
});

export default GroupMembers;
