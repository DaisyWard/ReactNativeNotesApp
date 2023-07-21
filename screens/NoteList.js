import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, FlatList } from 'react-native';
import Note from '../components/Note';

const NoteList = () => {
  const items = [
    {
      id: 1,
      title: 'Item 1',
      backgroundColor: 'red',
    },
    {
      id: 2,
      title: 'Item 2',
      backgroundColor: 'green',
    },
    {
      id: 3,
      title: 'Item 3',
      backgroundColor: 'blue',
    },
    {
      id: 4,
      title: 'Item 4',
      backgroundColor: 'yellow',
    },
    {
      id: 5,
      title: 'Item 5',
      backgroundColor: 'orange',
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView style={styles.somePageWrapper} contentContainerStyle={{
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>

        <FlatList
          data={items}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Note title={item.title} />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NoteList;

const styles = StyleSheet.create({
  somePageWrapper: {
    margin: 15,
  }
});