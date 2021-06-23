import React from "react";
import { View, StyleSheet, Text } from "react-native";
export const Date = ({ depature, station, arrival, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.arrival}>{arrival}</Text>
      <Text style={styles.station}>{station}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 15,
  },
  date: {
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
