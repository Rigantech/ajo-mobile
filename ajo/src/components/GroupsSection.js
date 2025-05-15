import React from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Text from "./Text";

const GroupsSection = () => {
  // Sample group names
  const groupNames = ["Ajo Group", "Family Group", "Work Buddies", "Travel Friends", "Book Club", "Gaming Squad"];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Ajo Group</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {groupNames.map((groupName, index) => (
          <TouchableOpacity key={index} style={styles.groupItem}>
            <Text style={styles.groupText}>{groupName}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 8,
  },
  scrollContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  groupItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 6,
    backgroundColor: "#f9f9f9",
  },
  groupText: {
    fontSize: 16,
    color: "#333",
  },
});

export default GroupsSection;
