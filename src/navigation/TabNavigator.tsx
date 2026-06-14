import ContactScreen from '@/screens/main/AllTools';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from '@/screens/main/home';
import ScannerScreen from '@/screens/main/scanerPDF';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'home',
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />

      <Tab.Screen
        name="Scanner"
        component={ScannerScreen}
        options={{
          title: 'pdf Scanner',
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="line-scan"
              size={24}
              color={focused ? '#0A84FF' : 'black'}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          title: 'All Tools',
          tabBarIcon: ({ color, size }) => <Ionicons name="apps" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
