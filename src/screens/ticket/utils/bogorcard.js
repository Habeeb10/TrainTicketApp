import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const BogorCard = ({
  station,
  rp,
  remains,
  clb,
  bgr,
  time1,
  time2,
  line,
  time3,
  icon,
}) => {
  return (
    <View style={styles.box}>
      <View>
        <Text style={styles.bogor}>{station}</Text>
        <View style={styles.clbbox}>
          <Text style={styles.clb}>{clb}</Text>
          <Text style={styles.bgr}>{bgr}</Text>
        </View>
        <View style={styles.timebox}>
          <Text style={styles.pm}>{time1}</Text>
          <Text style={styles.am}>{time2}</Text>
        </View>
        <View style={styles.commuterbox}>
          <View style={styles.commute}>
            <Text style={styles.commuter}>{line}</Text>
          </View>
          <Text style={styles.minutes}>{time3}</Text>
        </View>
      </View>

      <View>
        <Text style={styles.rp}>{rp}</Text>
        <Text style={styles.remains}>{remains}</Text>
        <View style={styles.secure}>{icon}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commute: {
    width: 130,
    height: 18,
    borderRadius: 4,
    backgroundColor: "#FFBA82",
    alignItems: "center",
    justifyContent: "center",
  },
  commuterbox: {
    flexDirection: "row",
    marginTop: 15,
    alignItems: "center",
  },
  minutes: {
    color: "#9695A8",
    fontWeight: "700",
    fontSize: 11,
    marginLeft: 15,
    lineHeight: 17,
  },
  commuter: {
    fontWeight: "700",
    fontSize: 11,
    color: "#FF8B2D",
  },
  am: {
    color: "#9695A8",
    fontSize: 11,
    fontWeight: "400",
    marginLeft: 115,
  },
  pm: {
    color: "#9695A8",
    fontSize: 11,
    fontWeight: "400",
  },
  timebox: {
    flexDirection: "row",
    marginTop: 10,
  },
  clbbox: {
    flexDirection: "row",
    marginTop: 10,
  },
  bgr: {
    color: "#9695A8",
    fontWeight: "700",
    fontSize: 11,
    marginLeft: 150,
  },
  clb: {
    color: "#9695A8",
    fontWeight: "700",
    fontSize: 11,
  },
  remains: {
    color: "#F86E6E",
    fontSize: 10,
    fontWeight: "700",
    lineHeight: 10,
    marginLeft: 10,
  },
  rp: {
    color: "#333E63",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 24,
    marginTop: 10,
    marginLeft: 10,
  },

  bogor: {
    fontSize: 14,
    fontWeight: "700",
    color: "#59597C",
    lineHeight: 24,
    marginTop: 10,
  },
  secure: {
    height: 25,
    width: 25,
    borderRadius: 10,
    backgroundColor: "#656CEE",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 45,
    marginLeft: 40,
  },

  box: {
    width: 360,
    height: 140,
    marginTop: 25,
    borderRadius: 8,
    backgroundColor: "white",
    marginLeft: 15,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
  },
});
