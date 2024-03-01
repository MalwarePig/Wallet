import { View,Text,StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
  

export default function Header() {
    return(
        <SafeAreaView>
            <View style={styles.styleHeader}>
             <Text style={styles.Title}> Wallet!</Text>
            </View>
        </SafeAreaView>
         
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