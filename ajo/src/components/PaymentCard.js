import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import Text from "./Text";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";
const PaymentCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.paymentCard}>
        <View style={styles.progressCircle}>
          <AnimatedCircularProgress
            size={70}
            width={6}
            fill={80}
            tintColor="#FFB800"
            backgroundColor="#E8DEF8"
            style={styles.progress}
            rotation={0}
            lineCap="round"
          >
            {(fill) => (
              <Text style={styles.progressText}>
                80%
                <Text style={[styles.progressText, { fontSize: 8 }]}>
                  Contributed
                </Text>
              </Text>
            )}
          </AnimatedCircularProgress>
        </View>
        <View style={styles.paymentInfo}>
          <View style={styles.paymentDue}>
            <Ionicons name="alert-circle" size={24} color="#FF924F" />
            <Text style={styles.paymentDueText}> Payment due soon</Text>
          </View>
          <Text style={styles.paymentDescription}>
            Contribute now. Your next {"\n"} contribution is due in 2 days.
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerBtn}>
          <Text style={styles.footerText}>Contribution history</Text>
          <Entypo name="chevron-small-right" size={16} color="#6C6C6C" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    // marginBottom: 5,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  paymentCard: {
    flexDirection: "row",
    padding: 16,
  },
  progressCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  progress: { justifyContent: "center", alignItems: "center" },
  progressText: {
    fontSize: 12,
    color: "#000",
    textAlign: "center",
    fontFamily: "OpenSans_600SemiBold",
  },
  progressSubText: {
    fontSize: 12,
    color: "#6C757D",
  },

  paymentInfo: {
    flex: 1,
  },

  paymentDue: {
    marginBottom: 4,
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  paymentDueText: {
    fontSize: 16,
    fontFamily: "OpenSans_600SemiBold",
  },
  paymentDescription: {
    fontSize: 14,
    color: "#6C757D",
  },
  linkText: {
    fontSize: 14,
    color: "#6C44FB",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    borderTopWidth: 1,
    borderTopColor: "#EEE",
    padding: 8,
  },
  footerText: {
    fontSize: 14,
    color: "#6C6C6C",
  },
  footerBtn: {
    flexDirection: "row",
    alignItems: "center",
    alignItems: "center",
  },
});

export default PaymentCard;
