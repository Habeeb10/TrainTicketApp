import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Secure } from "../../../../assets/svg";
import { TouchButton } from "../../../components/Button";

export const TicketComponent = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View style={styles.box}>
        <View>
          <TouchButton title="Tomorrow" style={styles.button} />
        </View>
        <View style={{ marginRight: 10 }}>
          <Text style={styles.bogor}>Bogor</Text>
          <Text style={styles.clb}>CLB - BGR</Text>
        </View>
        <View style={styles.secure}>
          <Secure />
        </View>
      </View>
      <View style={styles.box}>
        <TouchButton title="3Days" style={styles.but} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  but: {
    height: 40,
    width: 60,
    borderRadius: 15,
    marginRight: 20,
  },
  clb: {
    color: "#9695A8",
    fontSize: 10,
    fontWeight: "400",
    lineHeight: 16,
  },
  bogor: {
    fontSize: 22,
    fontWeight: "700",
    color: "#6D6D6D",
    lineHeight: 24,
  },
  secure: {
    height: 25,
    width: 25,
    borderRadius: 10,
    backgroundColor: "#656CEE",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    height: 40,
    width: 75,
    borderRadius: 15,
  },

  box: {
    width: 270,
    height: 120,
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: "white",
    marginLeft: 20,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
