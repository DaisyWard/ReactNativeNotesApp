import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  SafeAreaView,
} from 'react-native';
import {API, graphqlOperation} from 'aws-amplify';
import {createTodo} from './src/graphql/mutations.js';
import {listTodos} from './src/graphql/queries';
import {
  withAuthenticator,
  useAuthenticator,
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
  const [todos, setTodos] = useState([]);
  const Stack = createNativeStackNavigator()

  useEffect(() => {
    fetchTodos();
  }, []);

  console.log(todos, 'goose')

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos));

      const todos = todoData.data.listTodos.items;
      setTodos(todos);

      navigation.setParams({
        todos: todos,
      })
    } catch (err) {
      console.log('error fetching todos', err);
    }
  }

  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
          <Stack.Screen name='NoteApp' component={NoteList} options={{orientation: 'all', title: 'Note App'}} initialParams={{ itemId: 42, todos: todos }} />
          <Stack.Screen name='CreateNote' component={CreateNote} options={{orientation: 'all', title: 'Add Note'}} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default withAuthenticator(App);

const styles = StyleSheet.create({
  container: {width: 400, flex: 1, padding: 20, alignSelf: 'center'},
  todo: {marginBottom: 15},
  input: {backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18},
  todoName: {fontSize: 20, fontWeight: 'bold'},
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 8,
  },
  buttonText: {color: 'white', padding: 16, fontSize: 18},
});