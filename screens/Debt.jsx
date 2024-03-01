import { View,Text,StyleSheet } from 'react-native';
  

export default function Debt() {
    return(
        <View style={styles.styleHeader}>
         <Text style={styles.Title}> Debt!</Text>
        </View> 
    );  
}
 
const styles = StyleSheet.create({
    styleHeader:{
        marginTop:15,
        alignItems: 'center'
    },
    Title:{
        fontSize: 35,
        fontWeight: "bold"
    }

})