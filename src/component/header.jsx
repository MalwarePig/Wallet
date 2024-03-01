import { View,Text,StyleSheet } from 'react-native';
  

export default function Header() {
    return(
        <View style={styles.styleHeader}>
         <Text style={styles.Title}> Wallet!</Text>
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