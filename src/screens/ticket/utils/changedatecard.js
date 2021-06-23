import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const DateCard = ({ date, day, onpress, isActive }) => {
  return (
    <TouchableOpacity
      style={[styles.daybox, isActive && styles.container]}
      onPress={onpress}
    >
      <Text style={[styles.date, isActive && styles.textcolor]}>{date}</Text>
      <Text style={[styles.day, isActive && styles.textcolor]}>{day}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textcolor: {
    color: "white",
  },
  container: {
    backgroundColor: "#969BFF",
    height: 78,
    width: 56,
    alignItems: "center",
  },
  day: {
    color: "#9695A8",
    fontSize: 10,
    fontWeight: "700",
  },
  date: {
    marginTop: 15,
    marginBottom: 15,
    color: "#9695A8",
    fontSize: 14,
    fontWeight: "700",
  },
  daybox: {
    height: 78,
    width: 56,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    marginTop: 25,
  },
});
