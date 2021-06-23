import React from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";
import { Depature } from "./Depature";
import { Addition, Subtraction, Swap } from "../../../../assets/svg";
import { Line } from "./Depature";
import { TouchButton } from "../../../components/Button";
import { useState } from "react";
import { useNavigation } from "@react-navigation/core";

export const HomeComponent = () => {
  const [value, setValue] = useState(1);
  const navigation = useNavigation();
  return (
    <View style={styles.depbox}>
      <View style={styles.depcont}>
        <Depature
          depature="Departure"
          arrival="CLB"
          station="Cilebut Station"
        />
        <Swap style={{ marginTop: 20 }} />
        <Depature
          depature="Departure"
          arrival="MGR"
          station="Manggarai Station"
        />
      </View>
      <Line />
      <View style={styles.datebox}>
        <View>
          <Text style={styles.dateofdep}>Date of departure</Text>
          <Text style={styles.date}>Mon, 10 Sep 2020</Text>
        </View>
        <View style={styles.switchbox}>
          <Switch style={{ marginTop: 12 }} />
          <Text style={styles.trip}>Round-trip</Text>
        </View>
      </View>
      <View style={styles.passengerbox}>
        <View>
          <Text style={styles.passenger}>Total passenger</Text>
          <View style={styles.valuebox}>
            <TouchableOpacity
              style={styles.box}
              onPress={() => (value > 1 ? setValue(value - 1) : null)}
            >
              <Subtraction />
            </TouchableOpacity>

            <Text style={styles.one}>{value}</Text>

            <TouchableOpacity
              style={styles.boxPlus}
              onPress={() =>
                value >= 1 && value < 20 ? setValue(value + 1) : null
              }
            >
              <Addition />
            </TouchableOpacity>
          </View>
        </View>

        <TouchButton
          title="FIND TICKET"
          style={styles.button}
          onPress={() => navigation.navigate("ticket")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  valuebox: {
    flexDirection: "row",
    alignItems: "center",
  },
  boxPlus: {
    borderRadius: 15,
    width: 20,
    height: 20,
    borderColor: "#FF8B2D",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    borderRadius: 15,
    width: 20,
    height: 20,
    borderColor: "#9695A8",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },

  one: {
    fontSize: 14,
    marginLeft: 20,
    marginRight: 20,
  },

  button: {
    marginTop: 30,
  },
  passengerbox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  trip: {
    color: "#585871",
    fontSize: 10,
    fontWeight: "700",
    marginTop: 12,
    marginLeft: 20,
  },
  switchbox: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 60,
  },
  passenger: {
    marginTop: 30,
    color: "#656CEE",
    fontSize: 11,
    fontWeight: "700",
    marginBottom: 10,
  },
  date: {
    fontWeight: "700",
    fontSize: 14,
    color: "#59597C",
  },
  dateofdep: {
    color: "#656CEE",
    fontSize: 11,
    fontWeight: "700",
    marginTop: 12,
    marginBottom: 3,
  },
  datebox: {
    flexDirection: "row",
  },
  depcont: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  depbox: {
    width: 350,
    height: 240,
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: "white",
    marginLeft: 20,
    paddingHorizontal: 20,
  },
});
