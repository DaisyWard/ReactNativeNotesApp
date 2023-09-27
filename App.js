import React from 'react';
import {
  withAuthenticator,
} from '@aws-amplify/ui-react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import NoteList from './screens/NoteList';
import CreateNote from './screens/CreateNote';
import { StatusBar } from 'expo-status-bar';
import { Amplify } from 'aws-amplify';
import awsExports from './src/aws-exports';
Amplify.configure(awsExports);

const App = () => {
  const Stack = createNativeStackNavigator()

  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
          <Stack.Screen name='NoteApp' component={NoteList} options={{orientation: 'all', title: 'Note App'}} />
          <Stack.Screen name='CreateNote' component={CreateNote} options={{orientation: 'all', title: 'Add Note'}} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default withAuthenticator(App);
