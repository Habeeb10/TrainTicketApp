import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export const TouchButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.6}
    >
      <Text style={styles.touch}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF8B2D",
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    width: 128,
    alignSelf: "center",
    borderRadius: 10,
  },
  touch: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "700",
  },
});
