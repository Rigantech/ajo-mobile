import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Text from "../components/Text"; // Assuming you have a custom Text component
import Container from "../components/Container";
import BackBtn from "../components/BackBtn";

const GroupList = () => {
  const groups = [
    {
      name: "Queen Ladies Club",
      logo: require("../../assets/group-pic.png"), // Replace with the actual logo image path
      members: [
        require("../../assets/bukky.png"),
        require("../../assets/bukky.png"),
        require("../../assets/bukky.png"),
      ],
    },
    {
      name: "Itesiwaju Group",
      logo: require("../../assets/group-pic.png"),
      members: [
        require("../../assets/bukky.png"),
        require("../../assets/bukky.png"),
        require("../../assets/bukky.png"),
      ],
    },
    {
      name: "Market Women Group",
      logo: require("../../assets/group-pic.png"),
      members: [
        require("../../assets/bukky.png"),
        require("../../assets/bukky.png"),
        require("../../assets/bukky.png"),
      ],
    },
  ];

  return (
    <Container bg="#F7F6FF">
      <View style={styles.container}>
        <BackBtn title={"Ajo Groups"} />
        {groups.map((group, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            {/* Group Logo */}
            <Image source={group.logo} style={styles.groupLogo} />

            {/* Group Name */}
            <Text style={styles.groupName}>{group.name}</Text>

            {/* Member Avatars */}
            <View style={styles.membersContainer}>
              {group.members.map((member, idx) => (
                <Image key={idx} source={member} style={styles.memberAvatar} />
              ))}
              <Text style={styles.moreText}>5+</Text>
            </View>
          </TouchableOpacity>
        ))}
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
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  groupLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  groupName: {
    flex: 1,
    fontSize: 16,
    fontFamily: "OpenSans_700Bold",
    color: "#000",
  },
  membersContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  memberAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginLeft: -8, // Overlapping effect
    borderWidth: 1,
    borderColor: "#FFF",
  },
  moreText: {
    fontSize: 14,
    color: "#6C44FB",
    marginLeft: 8,
    fontFamily: "OpenSans_600SemiBold",
  },
});

export default GroupList;
