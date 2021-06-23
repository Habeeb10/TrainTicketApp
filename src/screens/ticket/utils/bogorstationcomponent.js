import React from "react";
import { View } from "react-native";
import { Secure } from "../../../../assets/svg";
import { BogorCard } from "./bogorcard";

const BogorList = [
  {
    station: "Bogor Station",
    rp: "Rp 2.500",
    remains: "1 Reamins",
    clb: "CLB",
    bgr: "BGR",
    time1: "12:00 PM",
    time2: "12:35 PM",
    line: "Commuter Line - A",
    time3: "35 minutes",
    icon: <Secure />,
  },
];

export const BogorStationComponent = () => {
  return (
    <View>
      <View>
        {BogorList.map((item, index) => {
          return (
            <BogorCard
              key={index}
              station={item.station}
              rp={item.rp}
              remains={item.remains}
              clb={item.clb}
              bgr={item.bgr}
              time1={item.time1}
              time2={item.time2}
              line={item.line}
              time3={item.time3}
              icon={item.icon}
            />
          );
        })}
      </View>
    </View>
  );
};
