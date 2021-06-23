import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Secure } from "../../../../assets/svg";
import { TouchButton } from "../../../components/Button";

export const SavedComponent = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View style={styles.bayudewantoro}>
        <View>
          <Text style={styles.bayu}>Bayu Dewantoro</Text>
          <Text style={styles.mail}>bdewandesign@gmail.com</Text>
        </View>
        <TouchableOpacity style={styles.add}>
          <Text style={styles.passenger}>Add Passenger</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bayude}>
        <Text style={styles.wahyuni}>Wahyuni Winarti</Text>
        <Text style={styles.mail}>wahyuniwinarti@gmail.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bayude: {
    marginLeft: 20,
    width: 314,
    height: 86,
    borderRadius: 20,
    backgroundColor: "white",
    paddingHorizontal: 10,
  },

  wahyuni: {
    color: "#59597C",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 16,
    marginTop: 20,
  },

  passenger: {
    marginLeft: 10,
    color: "white",
    fontSize: 12,
    fontWeight: "700",
  },
  bayudewantoro: {
    flexDirection: "row",
    marginLeft: 20,
    width: 314,
    height: 86,
    borderRadius: 20,
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  add: {
    width: 120,
    height: 30,
    backgroundColor: "#FF8B2D",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 30,
  },
  mail: {
    color: "#9695A8",
    fontSize: 10,
    fontWeight: "700",
    marginTop: 5,
    marginLeft: 5,
  },
  bayu: {
    color: "#5B5B7E",
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 5,
    marginTop: 20,
  },
});
