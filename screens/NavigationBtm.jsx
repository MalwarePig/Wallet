import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
 
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
//screens
import Home from './Home';
import Transactions from './Transactions';
import Debt from './Debt';
import Settings from './Settings';
import DebtStacksScreen from './DebtStacksScreen';

const Tab = createBottomTabNavigator();
const DebtStackNavigator = createNativeStackNavigator();

/** STACKS */

function MyStacks() {
    return (
        <DebtStackNavigator.Navigator initialRouteName='DebtMenuStack'>
            <DebtStackNavigator.Screen name="DebtMenuStack" component={Debt} options={{headerShown:false}}/>
            <DebtStackNavigator.Screen name="DebtStacksScreen" component={DebtStacksScreen} options={{ headerBackTitleVisible: false,title:"Back" }} />
        </DebtStackNavigator.Navigator>
    )  
}

function MyTab() {
    return(
        <Tab.Navigator initialRouteName='Home'
        screenOptions={{tabBarActiveTintColor:'purple'}}>
            <Tab.Screen name="Home" component={Home} 
                options={{
                    tabBarLabel: 'Home',/*Texto del label tab*/
                    headerShown: false,/*Para ocultar el header */
                    tabBarIcon:  ({ color, size }) => (
                        <AntDesign name="home" size={25} color={color} />
                    )
                }}
            />
            <Tab.Screen name="Transactions" component={Transactions} 
                options={{
                    tabBarLabel: 'Transactions',/*Texto del label tab*/
                    headerShown: false,/*Para ocultar el header */
                    tabBarIcon:  ({ color, size }) => (
                        <FontAwesome6 name="money-bill-transfer" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen name="Debt" component={MyStacks} 
                options={{
                    tabBarLabel: 'Debt',/*Texto del label tab*/
                    headerShown: false,/*Para ocultar el header */
                    tabBarIcon:  ({ color, size }) => (
                        <MaterialIcons name="money-off" size={24} color= {color} />
                    )
                }}
            />
            <Tab.Screen name="Settings" component={Settings}
                options={{
                    tabBarLabel: 'Settings',
                    headerShown: false,
                    tabBarIcon:  ({ color, size }) => (
                        <AntDesign name="setting" size={25} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default function NavigationBtm(){
    return (
        <NavigationContainer>
            <MyTab />
        </NavigationContainer>
    );
}






