import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Container from "../components/Container";
import BackBtn from "../components/BackBtn";
import Text from "../components/Text";
import PaymentCard from "../components/PaymentCard";
import FundSection from "../components/FundWallet";

const FundWallet = () => {
  return (
    <Container bg="#F7F6FF">
      <View style={styles.container}>
        <BackBtn title={"Queen Ladies Club"} />

        <PaymentCard />
        <FundSection />
        {/* Section Title */}


        <Text style={styles.orText}>OR</Text>

        {/* Paystack Card */}
        <View style={styles.paystackCard}>
          <Text style={styles.cardTitle}>Via Paystack</Text>
          <Text style={styles.cardDescription}>
            Make your payment via Paystack where you can use your card
          </Text>
          <TextInput
            style={styles.input}
            placeholder="100 - 1000000"
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.proceedButton}>
            <Text style={styles.buttonText}>Proceed to payment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F8F9FD",
  },


  orText: {
    textAlign: "center",
    color: "#6C757D",
    marginVertical: 8,
    fontSize: 14,
  },
  paystackCard: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 12,
    elevation: 3,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: "#000",
    marginBottom: 16,
  },
  proceedButton: {
    backgroundColor: "#6C44FB",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
});

export default FundWallet;
