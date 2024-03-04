import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import InputText from "../src/component/InputText";
import DropDown from "../src/component/DropDown";
import { Entypo } from "@expo/vector-icons";
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
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>Pago fijo</Text>

      <View style={styles.ContainerList}>
        <FlatList
          data={DATA}
          /* scrollEnabled={false} */
          showsVerticalScrollIndicator={false}
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
              <View style={styles.Detail}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("DebtStacksScreen")}
                >
                  <Entypo name="chevron-right" size={30} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
      
      <View style={styles.Form}>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Agregar credito</Text>
      </Pressable>
        <Text style={styles.TextLabel}>04/03/2024</Text>

        <Text style={styles.TextLabel}>Total mensual</Text>
        <InputText />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
    borderRadius: 15,
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 5,
    paddingVertical: 5,
  },
  Card: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between" /* Alinecion Horizontal */,
    alignItems: "center" /* Alinecion Vertical */,
    marginHorizontal:2,
    marginTop: 7,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "white",
    borderRadius: 20,

    shadowColor: "#000000",
    shadowOffset: {
      width: 1,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 5,
  },
  Form: {
    backgroundColor: "white",
    borderRadius: 15,
    marginVertical: 5,
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 5,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 5,
 
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
   
    shadowColor: "#000000",
    shadowOffset: {
      width: 5,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 8,
  },
  buttonOpen: {
    backgroundColor: "purple",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  Detail: {
    backgroundColor: "white",
    paddingVertical: 15,
    borderRadius: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
