import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { DateCard } from "./changedatecard";

const DateList = [
  {
    date: 15,
    day: "SAT",
  },
  {
    date: 16,
    day: "SUN",
  },
  {
    date: 17,
    day: "MON",
  },
  {
    date: 18,
    day: "TUE",
  },
  {
    date: 19,
    day: "WED",
  },
  {
    date: 20,
    day: "THUR",
  },
];

export const ChangeDate = () => {
  const [active, setActive] = useState("MON");
  return (
    <View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "space-between",
          width: 500,
        }}
        horizontal={true}
        style={styles.box}
      >
        {DateList.map((item, index) => {
          return (
            <DateCard
              key={index}
              date={item.date}
              day={item.day}
              onpress={() => setActive(item.day)}
              isActive={item.day === active}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});
