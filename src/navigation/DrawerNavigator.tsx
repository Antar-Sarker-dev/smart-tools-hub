import ContactScreen from '@/screens/contactScreen';
import HomeScreen from '@/screens/home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
const Drawer = createDrawerNavigator()

export default function DrawerNavigator(){
    return(
        <Drawer.Navigator screenOptions={{headerShown:true}}>
            <Drawer.Screen name="Home" component={HomeScreen}/>
            <Drawer.Screen name="Products" component={TabNavigator}/>
            <Drawer.Screen name="Contact" component={ContactScreen}/>
        </Drawer.Navigator>
    )
}