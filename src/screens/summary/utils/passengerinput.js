import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Select } from "../../../../assets/svg";

export const PassengerInput = ({
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
        <TouchableOpacity>
          <Select />
        </TouchableOpacity>
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
    flexDirection: "row",
    alignItems: "center",
    width: 88,
    height: 34,
    paddingHorizontal: 5,
    borderBottomWidth: 2,
    borderColor: "#656CEE",
    borderTopEndRadius: 3,
    borderTopStartRadius: 3,
    backgroundColor: "#E5E5E5",
    justifyContent: "space-between",
  },
  input: {
    fontSize: 12,
  },
});
