import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import NoteList from './screens/NoteList';

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name="Note App" component={NoteList}  options={{orientation: 'all'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
