import React from "react";
import { View } from "react-native";
import { Secure } from "../../../../assets/svg";
import { KotaCard } from "./kotacard";

const KotaList = [
  {
    station: "Jakarta Kota Station",
    rp: "Rp 2.500",
    remains: "2 Reamins",
    clb: "CLB",
    jkt: "JKT",
    time1: "08:00 AM",
    time2: "10:20 AM",
    line: "Commuter Line - D",
    time3: "2 Hours 20 minutes",
    icon: <Secure />,
  },
];

export const KotaStationComponent = () => {
  return (
    <View>
      <View>
        {KotaList.map((item, index) => {
          return (
            <KotaCard
              key={index}
              station={item.station}
              rp={item.rp}
              remains={item.remains}
              clb={item.clb}
              jkt={item.jkt}
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
