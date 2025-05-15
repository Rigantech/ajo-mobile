import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Text from "../components/Text";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const FundWallet = () => {
  return (
    <>
      <Text style={styles.sectionTitle}>Fund your wallet</Text>

      {/* Bank Transfer Card */}
      <View style={styles.bankCard}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ backgroundColor: "#7F38FF" }}>
            <Image
              source={require("../../assets/bank.png")}
              style={{ width: 45, height: 45, padding: 5 }}
            />
          </View>
          <View>
            <Text style={styles.cardTitle}>Via Bank Transfer</Text>
            <Text style={styles.cardDescription}>
              Transfer money into your unique{"\n"} account number showing below
            </Text>
          </View>
        </View>

        <View style={styles.bankDetails}>
          <Text style={styles.detailLabel}>Account name:</Text>
          <Text style={styles.detailValue}>RIGANTECH/FUNMI</Text>
          <Text style={styles.detailLabel}>Bank name:</Text>
          <Text style={styles.detailValue}>Wema Bank</Text>
          <Text style={styles.detailLabel}>Account number:</Text>
          <Text style={[styles.detailValue, styles.accountNumber]}>
            9035161685
          </Text>
        </View>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.copyButton}>
            <Text style={styles.buttonText}>Copy number</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton}>
            <Text style={styles.buttonText}>Share details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontFamily: "OpenSans_600SemiBold",
    color: "#000",
    marginVertical: 10,
  },
  bankCard: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: "OpenSans_600SemiBold",
  },
  cardDescription: {
    fontSize: 14,
    color: "#6C757D",
    marginBottom: 16,
  },
  bankDetails: {
    marginBottom: 16,
  },
  detailLabel: {
    fontSize: 14,
    color: "#6C757D",
  },
  detailValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6C44FB",
  },
  accountNumber: {
    fontSize: 20,
    color: "#000",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  copyButton: {
    flex: 1,
    backgroundColor: "#F2F2FF",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
    marginRight: 8,
  },
  shareButton: {
    flex: 1,
    backgroundColor: "#6C44FB",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 14,
    color: "#FFF",
    fontWeight: "bold",
  },
});
export default FundWallet;
