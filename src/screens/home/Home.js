import "react-native-gesture-handler";
import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import IcMenu from "../../../assets/svg";
import { Chopper, Ellipse } from "../../../assets/images";
import { HomeComponent } from "./utils/homecomponent";
import { TicketComponent } from "./utils/ticketcomponent";
import { NewsComponent } from "./utils/newscomponent";
import { HomeStyles as styles } from "./utils/homestyles";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="Light" />
      <IcMenu style={styles.ic} />
      <View style={styles.maskcont}>
        <Text style={styles.right}>Where are you going right now?</Text>
        <Image source={Chopper} style={styles.mask} />
      </View>
      <Image source={Ellipse} style={styles.ellipse} />
      <HomeComponent />
      <Text style={styles.ticket}>My Ticket</Text>
      <View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ justifyContent: "center" }}
          horizontal={true}
        >
          <TicketComponent />
        </ScrollView>
      </View>
      <Text style={styles.news}>News</Text>
      <View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ justifyContent: "center" }}
          horizontal={true}
        >
          <NewsComponent />
        </ScrollView>
      </View>
    </View>
  );
}
