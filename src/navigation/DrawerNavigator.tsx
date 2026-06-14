import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import ProfileScreen from '@/screens/profile';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Profile" options={{ headerShown: false }} component={ProfileScreen} />
    </Drawer.Navigator>
  );
}