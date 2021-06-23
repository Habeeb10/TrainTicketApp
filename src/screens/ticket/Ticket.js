import "react-native-gesture-handler";
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Header } from "../../components/Header";
import { ChangeDate } from "./utils/changedate";
import { BogorStationComponent } from "../ticket/utils/bogorstationcomponent";
import { KotaStationComponent } from "../ticket/utils/kotastationcomponent";
import { DepokStationComponent } from "./utils/depokstationcomponent";
import { Back, Filter } from "../../../assets/svg";
import { TicketStyles as styles } from "./utils/tickectstyles";

export default function Ticket({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="Light" />
      <Header
        icon={<Back />}
        onPress={() => navigation.navigate("home")}
        title="Cilebut - Manggarai"
        headerStyle={styles.cilebut}
      />
      <ChangeDate />
      <BogorStationComponent />
      <KotaStationComponent />
      <DepokStationComponent />

      <TouchableOpacity
        style={styles.filterbox}
        onPress={() => navigation.navigate("summary")}
      >
        <View style={{ flexDirection: "row" }}>
          <Filter />
          <Text style={styles.filter}>FILTER</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
