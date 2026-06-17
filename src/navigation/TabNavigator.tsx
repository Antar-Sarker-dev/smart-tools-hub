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
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#f7f3f3',
          elevation: 12,
        },
      }}>
      <Tab.Screen
        name="allTools"
        component={ContactScreen}
        options={{
          title: 'All Tools',
          tabBarActiveTintColor: '#1A1A1B',
          tabBarInactiveTintColor: '#708090',
          tabBarIcon: ({ color, size }) => <Ionicons name="apps" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Recent Files"
        component={RecentFileScreen}
        options={{
          title: 'Recent Files',
          tabBarActiveTintColor: '#1A1A1B',
          tabBarInactiveTintColor: '#708090',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="drive-file-move-outline" size={30} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Scanner"
        component={ScannerScreen}
        options={{
          title: 'pdf Scanner',
          tabBarActiveTintColor: '#1A1A1B',
          tabBarInactiveTintColor: '#708090',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="line-scan" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
