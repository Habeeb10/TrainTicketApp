import { StyleSheet } from "react-native";

export const HomeStyles = StyleSheet.create({
  news: {
    color: "#59597C",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 20,
    marginTop: 20,
  },
  ticket: {
    color: "#59597C",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 20,
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
    marginTop: 40,
    borderRadius: 8,
    backgroundColor: "white",
    marginLeft: 20,
    paddingHorizontal: 20,
  },
  ellipse: {
    width: 70,
    height: 20,
    marginLeft: 270,
  },
  right: {
    color: "#333E63",
    fontWeight: "700",
    fontSize: 22,
    width: 194,
    lineHeight: 33,
  },
  maskcont: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    marginTop: 10,
    alignItems: "center",
  },
  mask: {
    width: 120,
    height: 70,
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  ic: {
    marginTop: 60,
    marginLeft: 24,
  },
});
