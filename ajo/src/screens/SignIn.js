import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import Text from "../components/Text";
import Button from "../components/Button";
import Container from "../components/Container";
import Input from "../components/Input";
import BackBtn from "../components/BackBtn";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // Add your sign in logic here
    console.log("Sign in button pressed");
  };

  return (
    <Container>
      <TouchableWithoutFeedback
        // onPress={() => {
        //   Keyboard.dismiss;
        // }}
        onPress={Keyboard.dismiss}
      >
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/ajo-phone.png")}
              style={{ height: 190, width: 242 }}
              resize="contain"
            />
          </View>

          {/* <BackBtn /> */}
          <Text style={styles.header}>Log In to Your Account</Text>
          <Input
            label={"Email address"}
            placeholder="johndoe@gmail.com"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            label={"Password"}
            placeholder="*******"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
          <Button text="Log In" onPress={handleSignIn} />
          <View style={styles.bottom}>
            <Text>Don’t have an account, yet?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SignUp");
              }}
            >
              <Text style={styles.authText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Container>
  );
};

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,

  },
  header: {
    textAlign: "center",
    fontFamily: "OpenSans_700Bold",
    fontSize: 24,
    marginTop: 25,
    marginBottom: 20,
  },
  bottom: {
    bottom: 0,
    position: "absolute",
    left: 0,
    right: 0,
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "center",
  },
  authText: {
    color: "#7F38FF",
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: "center"
  }
});

export default SignInScreen;
