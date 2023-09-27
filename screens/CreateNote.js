import React, { useLayoutEffect, useState, Dimensions } from 'react';
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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon='checkmark-outline'
            color='green'
            onPress={addTodo}
          />
        )
      }
    })
  })

  return (
    <View style={styles.container}>
      <TextInput
        multiline
        onChangeText={value => setInput('name', value)}
        style={[styles.input, styles.title]}
        value={formState.name}
        placeholder="Title"
        placeholderTextColor='rgb(158, 158, 158)'
      />

      <TextInput
      multiline
        onChangeText={value => setInput('description', value)}
        style={[styles.input, styles.description]}
        value={formState.description}
        placeholder="Note"
        placeholderTextColor='rgb(158, 158, 158)'
      />
    </View>
  );
};

export default CreateNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white'
  },
  input: {
    padding: 8,
    fontSize: 18,
  },
  description: {
    height: 300,
    verticalAlign: 'top'
  },
  title: {
    fontSize: 24,
  }
})