import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

export const IdentityInput = ({
  placeHolder,
  style,
  value,
  label,
  inputStyle,
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.container, style]}>
        <TextInput
          value={value}
          style={[styles.input, inputStyle]}
          placeholder={placeHolder}
          placeholderTextColor="#5B5B7E"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  label: {
    fontWeight: "600",
    fontSize: 9,
    color: "#9695A8",
    lineHeight: 10,
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 5,
  },
  container: {
    width: 193,
    height: 34,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "grey",
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
  },
  input: {
    fontSize: 12,
  },
});
