import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Text from "../components/Text";
import Button from "../components/Button";
import Container from "../components/Container";
import Input from "../components/Input";
import BackBtn from "../components/BackBtn";
import { styles } from "./SignIn";

const SignInScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

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
          <Text style={styles.header}>Create Your Account</Text>
          <Input
            label={"Fullname"}
            placeholder="John Doe"
            value={fullName}
            onChangeText={(text) => setFullName(text)}
          />
          <Input
            label={"Username"}
            placeholder="johndoe"
            value={userName}
            onChangeText={(text) => setUserName(text)}
          />
          <Input
            label={"Email address"}
            placeholder="johndoe@gmail.com"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            label={"Phone Number"}
            placeholder="+234 123 4567 890"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
          />
          <Input
            label={"Password"}
            placeholder="*******"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
          <Input
            label={"Confirm Password"}
            placeholder="*******"
            value={cPassword}
            onChangeText={(text) => setCPassword(text)}
            secureTextEntry
          />
          <Button text="Log In" onPress={handleSignIn} />
          <View style={styles.bottom}>
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={()=> {
              navigation.navigate("SignIn")
            }}>
              <Text style={styles.authText}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Container>
  );
};

export default SignInScreen;
