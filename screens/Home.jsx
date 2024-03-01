import { View,Text,StyleSheet } from 'react-native';
import  Header from '../src/component/header'

export default function Home() {
    return(
        <View style = {styles.FullBody}>
         <Header/>
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
    },
    

})