import { View, Text, StyleSheet, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import InputText from "../src/component/InputText";
import DropDown from "../src/component/DropDown";
const DATA = [
  {
    id: "1",
    title: "Banorte",
  },
  {
    id: "2",
    title: "Banamex",
  },
  {
    id: "3",
    title: "Banregio",
  },
  {
    id: "4",
    title: "Bancoppel",
  },
  {
    id: "5",
    title: "CreditoAuto",
  },
  {
    id: "6",
    title: "Prestamo",
  },
  {
    id: "7",
    title: "MercadoLibre",
  },
  {
    id: "8",
    title: "MercadoPago",
  },
  {
    id: "9",
    title: "Amazon",
  },
  {
    id: "310",
    title: "Spotify",
  },
  {
    id: "11",
    title: "Netflix",
  },
];

export default function Debt() {
  return (
    <View style={styles.Container}>
      <Text style={styles.Title}> Dedudas</Text>

      <View style={styles.ContainerList}>
        <FlatList
          data={DATA}
          renderItem={({ item, index }) => (
            <View style={styles.Card}>
              <View>
                <FontAwesome name="cc-mastercard" size={24} color="black" />
                <Text style={styles.TextLabel}>{item.title}</Text>
              </View>

              <View>
                <Text style={styles.TextLabel}>Corte</Text>
                <Text style={styles.TextLabel}>01/01/2024</Text>
                <Text style={styles.TextLabel}>Pago</Text>
                <Text style={styles.TextLabel}>01/01/2024</Text>
              </View>

              <Text style={styles.TextLabel}>Monto $</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.Form}>
        <Text style={styles.TextLabel}>Concepto</Text>
        <InputText />
        <Text style={styles.TextLabel}>Monto $</Text>
        <InputText />
        <DropDown />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 40,
  },
  styleHeader: {
    marginTop: 15,
    alignItems: "center",
  },
  Title: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  ContainerList: {
    backgroundColor: "#ebebeb",
    borderRadius: 15,
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 20,
    marginBottom: 5,
    paddingVertical: 5,
  },
  Card: {
    backgroundColor: "#f9c2ff",
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between" /* Alinecion Horizontal */,
    alignItems: "center" /* Alinecion Vertical */,

    marginTop: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#ebebeb",
    borderRadius: 15,
    borderWidth: 1,
  },
  Form: {
    backgroundColor: "#ebebeb",
    borderRadius: 15,
    marginTop: 10,
    flexDirection: "column",
    alignItems: "center",
  },
});
