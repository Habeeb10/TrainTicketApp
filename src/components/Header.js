import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Header = ({ icon, title, onPress, headerStyle }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>
      <Text style={[styles.title, headerStyle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 70,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "#333E63",
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 33,
    alignSelf: "center",
  },
});
