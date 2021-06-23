import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const Depature = ({ depature, station, arrival, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.depature}>{depature}</Text>
      <Text style={styles.arrival}>{arrival}</Text>
      <Text style={styles.station}>{station}</Text>
    </View>
  );
};
export const Line = (inputStyle) => {
  return <View style={[styles.container1, inputStyle]}></View>;
};

const styles = StyleSheet.create({
  container1: {
    width: 310,
    borderWidth: 1,
    borderColor: "#F2F2F2",
    marginTop: 30,
  },
  container: {
    marginTop: 10,
  },
  depature: {
    color: "#656CEE",
    fontSize: 11,
    fontWeight: "700",
  },
  arrival: {
    color: "#5B5B7E",
    fontWeight: "700",
    fontSize: 16,
  },
  station: {
    color: "#9695A8",
    fontWeight: "400",
    fontSize: 11,
  },
});
