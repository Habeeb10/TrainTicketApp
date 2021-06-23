import React from "react";
import { View } from "react-native";
import { Secure } from "../../../../assets/svg";
import { DepokCard } from "./depokcard";
import { KotaCard } from "./kotacard";

const DepokList = [
  {
    station: "Depok Station",
    rp: "Rp 2.500",
    remains: "3 Reamins",
    clb: "CLB",
    dpk: "DPK",
    time1: "1:00 PM",
    time2: "1:45 PM",
    line: "Commuter Line - C",
    time3: "45 minutes",
    icon: <Secure />,
  },
];

export const DepokStationComponent = () => {
  return (
    <View>
      <View>
        {DepokList.map((item, index) => {
          return (
            <DepokCard
              key={index}
              station={item.station}
              rp={item.rp}
              remains={item.remains}
              clb={item.clb}
              dpk={item.dpk}
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
