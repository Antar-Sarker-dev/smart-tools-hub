import ContactScreen from '@/screens/main/AllTools';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import ScannerScreen from '@/screens/main/scanerPDF';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import RecentFileScreen from '@/screens/main/recentFile';

const Tab = createBottomTabNavigator();
export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          title: 'All Tools',
          tabBarIcon: ({ color, size }) => <Ionicons name="apps" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Recent Files"
        component={RecentFileScreen}
        options={{
          title: 'Recent Files',
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons
              name="drive-file-move-outline"
              size={30}
              color={focused ? '#0A84FF' : 'black'}
            />
          ),
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
    </Tab.Navigator>
  );
}
