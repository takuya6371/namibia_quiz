import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from './navigation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
