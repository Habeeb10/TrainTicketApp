import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Weather } from "../../../../assets/images";

export const NewsComponent = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View style={styles.box}>
        <View>
          <View style={styles.weather}>
            <Text style={styles.wether}>Weather</Text>
          </View>
          <Text style={styles.today}>
            The weather for today is great for trip
          </Text>
        </View>
        <Image source={Weather} style={styles.weathericon} />
      </View>
      <View style={styles.box2}>
        <View style={styles.Update}>
          <Text style={styles.update}>Update</Text>
        </View>
        <Text style={styles.train}>Protocol health on the train</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  train: {
    color: "#5B5B7E",
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 24,
    width: 90,
    height: 72,
    marginTop: 4,
  },
  update: {
    color: "#FF8B2D",
  },
  box2: {
    width: 270,
    height: 150,
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: "white",
    marginLeft: 20,
    paddingHorizontal: 15,
  },
  Update: {
    width: 65,
    height: 20,
    backgroundColor: "#FFBA82",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  wether: {
    color: "white",
  },
  weather: {
    width: 65,
    height: 20,
    backgroundColor: "#656CEE",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  today: {
    color: "#585871",
    fontWeight: "700",
    fontSize: 14,
    width: 113,
    height: 72,
    marginTop: 10,
  },
  weathericon: {
    width: 120,
    height: 70,
    resizeMode: "contain",
  },
  button: {
    height: 40,
    width: 75,
    borderRadius: 4,
    backgroundColor: "rgba(101, 108, 238, 0.2);",
  },

  box: {
    width: 274,
    height: 150,
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
