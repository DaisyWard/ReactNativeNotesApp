import React, { useLayoutEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import IconButton from '../components/IconButton';
import {createTodo} from '../src/graphql/mutations.js';
import {API, graphqlOperation} from 'aws-amplify';

const CreateNote = ({ navigation }) => {
  const userSelector = (context) => [context.user]
  const initialFormState = {name: '', description: ''};
  const [formState, setFormState] = useState(initialFormState);
  const [todos, setTodos] = useState([]);

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return;
      const todo = {...formState};
      setTodos([...todos, todo]);
      setFormState(initialFormState);
      await API.graphql(graphqlOperation(createTodo, {input: todo}));
    } catch (err) {
      console.log('error creating todo:', err);
    }
  }

const SignOutButton = () => {
  const { user, signOut } = useAuthenticator(userSelector);
  return (
    <Pressable onPress={signOut} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>
        Hello, {user?.username}! Click here to sign out!
      </Text>
    </Pressable>
  );
};

  function setInput(key, value) {
    setFormState({...formState, [key]: value});
  }

  const headerButtonPressHandler = () => {
    console.log('pressed!')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
          icon='checkmark-outline'
          color='green'
          onPress={headerButtonPressHandler}
          />
        )
      }
    })
  })

  return (
    <View>
      {/* <TextInput
        //value='Title'
        style={styles.title}
        placeholder='ADD TITLE...'
        placeholderTextColor='rgb(105, 105, 105)'
      />
      <TextInput
        //value='Title'
        style={styles.title}
        placeholder='ADD DESCRIPTION...'
        placeholderTextColor='rgb(105, 105, 105)'
      /> */}
      <TextInput
        onChangeText={value => setInput('name', value)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <TextInput
        onChangeText={value => setInput('description', value)}
        style={styles.input}
        value={formState.description}
        placeholder="Description"
      />
      <Pressable onPress={addTodo} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Create todo</Text>
      </Pressable>
    </View>
  );
};

export default CreateNote;

const styles = StyleSheet.create({
  title: {
    height: 40,
    margin: 12,
  },
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
})