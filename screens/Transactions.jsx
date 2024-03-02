import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DropDown from "../src/component/DropDown";
import InputText from "../src/component/InputText";
import { FontAwesome } from "@expo/vector-icons";

const DATA = [
  {
    id: "1",
    title: "First Item",
  },
  {
    id: "2",
    title: "Second Item",
  },
  {
    id: "3",
    title: "Third Item1",
  },
  {
    id: "4",
    title: "First Item2",
  },
  {
    id: "5",
    title: "Second Item3",
  },
  {
    id: "6",
    title: "Third Iteassm4s",
  },
  {
    id: "7",
    title: "Third Item4123",
  },
  {
    id: "8",
    title: "First Item",
  },
  {
    id: "9",
    title: "Second Item",
  },
  {
    id: "310",
    title: "Third Item1",
  },
  {
    id: "11",
    title: "First Item2",
  },
  {
    id: "15",
    title: "Second Item3",
  },
  {
    id: "16",
    title: "Third Iteassm4s",
  },
  {
    id: "17",
    title: "Third Item4123",
  },
  {
    id: "3130",
    title: "Third Item1",
  },
  {
    id: "131",
    title: "First Item2",
  },
  {
    id: "135",
    title: "Second Item3",
  },
  {
    id: "136",
    title: "Third Iteassm4s",
  },
  {
    id: "173",
    title: "Third Item4123",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function Transactions() {
  return ( 
    <View style={styles.Container}>
      <Text style={styles.Title}> Transacciones</Text>

      <View style={styles.Form}>
        <Text style={styles.TextLabel}>Concepto</Text>
        <InputText />
        <Text style={styles.TextLabel}>Monto $</Text>
        <InputText />
        <DropDown />
      </View>

      <View style={styles.ContainerList}>
        <FlatList
          data={DATA}
          renderItem={({ item, index }) => (
            <View style={styles.Card}>
              <View>
                <FontAwesome name="cc-mastercard" size={24} color="black" />
                <Text style={styles.TextLabel}>Tarjeta</Text>
              </View>

              <Text style={styles.TextLabel}>01/01/2024 $</Text>
              <Text style={styles.TextLabel}>Monto $</Text>
            </View>
          )}
        />
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
  ContainerList: {
    backgroundColor: "#ebebeb",
    borderRadius: 15,
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 20,
    marginBottom:5,
    paddingVertical:5
  },
  Title: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center", 
  },
  TextLabel: {
    fontSize: 15,
    textAlign: "center",
    color: "#4c4c4c",
  },
  Form: {
    backgroundColor: "#ebebeb",
    borderRadius: 15,
    marginTop: 10,
    flexDirection: "column",
    alignItems: "center",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  Card: {
    backgroundColor: "#f9c2ff",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",/* Alinecion Horizontal */
    alignItems: "center",/* Alinecion Vertical */
    
    marginTop:5,
    paddingHorizontal:10,
    paddingVertical : 5,
    backgroundColor: "#ebebeb",
    borderRadius: 15,
    borderWidth: 1,
  },
});
