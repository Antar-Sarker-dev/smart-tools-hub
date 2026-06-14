import { StatusBar } from 'expo-status-bar';
import './global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootStack from '@/navigation/RootStack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
      <RootStack/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}