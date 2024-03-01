import { View, Text, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DropDown from "../src/component/DropDown";
import InputText from "../src/component/InputText";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item1",
  },
  {
    id: "bd7acbea-c1b1-46c2-ae1d5-3ad53abb28ba",
    title: "First Item2",
  },
  {
    id: "3ac68afc-c605-48d3-34f8-fbd91aa97f63",
    title: "Second Item3",
  },
  {
    id: "58694a0f-3da1-471f-b4d96-145342571e29d72",
    title: "Third Iteassm4s",
  },
  {
    id: "58694a0f-3da1-471f-b4d96-141235571e29d72",
    title: "Third Item4123",
  },
];

const Item = ({title}) => (
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

        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
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
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
