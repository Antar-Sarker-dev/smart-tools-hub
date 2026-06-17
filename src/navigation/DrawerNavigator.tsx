import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import ProfileScreen from '@/screens/profile';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#E5E4E2',
          borderColor: '#FFFFF',
          elevation: 12,
        },

        headerTitle: 'Smart Tools Hub',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#708090',
          fontSize: 19,
          fontWeight: 'bold',
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ marginLeft: 25 }}>
            <Ionicons name="menu-outline" size={28} color="#708090" />
          </TouchableOpacity>
        ),
      })}>
      <Drawer.Screen name="All Tools" component={TabNavigator} />
      <Drawer.Screen name="Profile" options={{ headerShown: false }} component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
