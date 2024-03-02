import { StyleSheet, TextInput, View } from 'react-native';


export default function InputText() {
    return ( 
       
        <TextInput
            editable
            numberOfLines={4}
            maxLength={40}
            style={styles.inputText}
          /> 
    );
  }
 
const styles = StyleSheet.create({ 
    inputText: {     
      textAlign: "center",
      borderWidth: 1,
      borderRadius: 10,
      width: "70%",
      height: 35,
      fontWeight: "bold",
    },
  });
