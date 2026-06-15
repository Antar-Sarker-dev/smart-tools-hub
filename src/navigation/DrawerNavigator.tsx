import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import ProfileScreen from '@/screens/profile';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HeaderTitle } from '@react-navigation/elements';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerTitle: 'Smart Tools Hub',
        headerTitleAlign: 'center',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ marginLeft: 25 }}>
            <Ionicons name="menu-outline" size={28} color="black" />
          </TouchableOpacity>
        ),
      })}>
      <Drawer.Screen name="All Tools" component={TabNavigator} />
      <Drawer.Screen name="Profile" options={{ headerShown: false }} component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
