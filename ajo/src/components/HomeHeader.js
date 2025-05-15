import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Text from "./Text";
import Ionicons from "@expo/vector-icons/Ionicons";

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/person-icon.png")}
            style={{ width: 40, height: 40 }}
          />
        </View>
        <View style={styles.personDescContainer}>
          <Text style={styles.personName}>Welcome Back, John Doe</Text>
          <Text style={styles.persondesc}>
            {" "}
            Your money:
            <Text style={[styles.persondesc, { color: "#7F38FF" }]}>
              #1,000.00
            </Text>
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.right}>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
  },
  imageContainer: {
    borderRadius: 100,
    overflow: "hidden",
  },
  personDescContainer: {
    marginLeft: 10,
  },
  personName: {
    fontSize: 16,
    // marginBottom: 2,
    fontFamily: "OpenSans_600SemiBold",
  },
  persondesc: {
    fontSize: 16,
    // marginTop: 2,
    color: "#6C6C6C",
  },
  right: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeHeader;
