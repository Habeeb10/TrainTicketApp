import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Passenger, Scroll } from "../../../../assets/svg";
import { Line } from "../../home/utils/Depature";
import { IdentityInput } from "./identityinput";
import { PassengerInput } from "./passengerinput";

export const PassengerComponent = () => {
  return (
    <View style={styles.depbox}>
      <View style={styles.circlebox}>
        <View style={styles.circle}>
          <Passenger />
        </View>
        <Text style={styles.passenger}>Passenger 1</Text>
        <TouchableOpacity>
          <Scroll style={styles.scroll} />
        </TouchableOpacity>
      </View>
      <View style={styles.line}></View>
      <View style={styles.putbox}>
        <PassengerInput label="Type of identity" placeHolder="Pasport" />
        <IdentityInput label="Identity number" placeHolder="A 38910381" />
      </View>
      <IdentityInput
        label="Full name"
        placeHolder="Bayu Dewantoro"
        style={styles.fullname}
      />
      <Text style={styles.infant}>
        Infant passengers do not get their own seat. Passengers under 18 years
        old can fill in the family card number or date of birth (ddmmyyyy)
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infant: {
    color: "#88879C",
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 16,
    marginTop: 10,
  },
  fullname: {
    width: 310,
  },
  putbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  line: {
    marginTop: 10,
    width: 310,
    borderWidth: 1,
    borderColor: "#F2F2F2",
  },
  scroll: {
    marginLeft: 180,
    marginTop: 10,
  },
  passenger: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 14,
    fontWeight: "700",
    color: "#333E63",
  },
  circlebox: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#FF8B2D",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  depbox: {
    width: 350,
    height: 270,
    borderRadius: 8,
    backgroundColor: "white",
    marginLeft: 20,
    paddingHorizontal: 20,
  },
});
