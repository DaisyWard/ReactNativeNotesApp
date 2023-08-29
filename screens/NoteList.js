import React, {useEffect, useState} from 'react';
import { StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Text } from 'react-native';
import Note from '../components/Note';
import { Entypo } from '@expo/vector-icons';
import {API, graphqlOperation} from 'aws-amplify';
import {listTodos} from '../src/graphql/queries';
import { Amplify } from 'aws-amplify';
import awsExports from '../src/aws-exports';
Amplify.configure(awsExports);

const NoteList = ({navigation, route }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos));

      const todos = todoData.data.listTodos.items;
      setTodos(todos);

    } catch (err) {
      console.log('error fetching todos', err);
    }
  }

  const clickHandler = () => {
    navigation.navigate('CreateNote')
  }

  return (
    <SafeAreaView style={styles.container}>
        <FlatList
          data={todos}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Note title={item.name} category='goose' text={item.description} date={item.updatedAt} />
          )}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={clickHandler}
          style={styles.touchableOpacityStyle}
        >
          <Entypo name='plus' size={45} color='black' />
        </TouchableOpacity>
    </SafeAreaView>
  );
};

export default NoteList;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 75,
    height: 75,
    backgroundColor: 'white',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30
  }
})