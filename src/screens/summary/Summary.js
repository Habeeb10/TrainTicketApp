import "react-native-gesture-handler";
import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Header } from "../../components/Header";
import { Back, Save, User } from "../../../assets/svg";
import { SavedComponent } from "./utils/savedpassengercomponent";
import { PassengerComponent } from "./utils/passengercomponent";
import { SummaryStyles as styles } from "./utils/summarystyles";
import { BogorStationComponent } from "../ticket/utils/bogorstationcomponent";

export default function Summary({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="Light" />
      <Header
        icon={<Back onPress={() => navigation.navigate("ticket")} />}
        title="Ordering summary"
        headerStyle={styles.cilebut}
      />
      <BogorStationComponent />
      <View style={styles.savedbox}>
        <Save />
        <Text style={styles.passenger}>Saved Passengers</Text>
      </View>
      <View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ justifyContent: "center" }}
          horizontal={true}
        >
          <SavedComponent />
        </ScrollView>
        <View style={styles.passbox}>
          <User />
          <Text style={styles.details}>Passengers Details</Text>
          <Text style={styles.add}>+ Add Passenger</Text>
        </View>
        <PassengerComponent />
      </View>
      <View style={styles.pilan}>
        <TouchableOpacity style={styles.pilihbox}>
          <Text style={styles.pilih}>PILIH KURSI</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.lanjutbox}>
          <Text style={styles.lanjut}>LANJUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
