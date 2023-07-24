import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import Note from '../components/Note';
import { Entypo } from '@expo/vector-icons';

const NoteList = ({navigation}) => {
  const items = [
    {
      id: 1,
      title: 'I am a title',
      category: 'Wishlist',
      text: 'I am the text of the wishlist note',
      date: '14/07/2023'
    },
    {
      id: 2,
      title: 'I am a study note',
      category: 'Study',
      text: 'I need to study for my final exam',
      date: '24/07/2023'
    },
    {
      id: 3,
      title: 'I am a personal note',
      category: 'Personal',
      text: 'Go to Tesco to buy cheese',
      date: '22/07/2023'
    },
    {
      id: 4,
      title: 'I\'m a second wishlist note',
      category: 'Wishlist',
      text: 'Go to America',
      date: '12/06/2023'
    },
    {
      id: 5,
      title: 'I am a work note',
      category: 'Work',
      text: 'I need to email HR about an important thing. I need to email HR about an important thing.I need to email HR about an important thing.I need to email HR about an important thing.',
      date: '12/06/2023'
    },
    {
      id: 6,
      title: 'I am a work note',
      category: 'Work',
      text: 'I need to email HR about an important thing. I need to email HR about an important thing.I need to email HR about an important thing.I need to email HR about an important thing.',
      date: '12/06/2023'
    },
    {
      id: 7,
      title: 'I am a work note',
      category: 'Work',
      text: 'I need to email HR about an important thing. I need to email HR about an important thing.I need to email HR about an important thing.I need to email HR about an important thing.',
      date: '12/06/2023'
    },
    {
      id: 8,
      title: 'I am a work note',
      category: 'Work',
      text: 'I need to email HR about an important thing. I need to email HR about an important thing.I need to email HR about an important thing.I need to email HR about an important thing.',
      date: '12/06/2023'
    },
  ]

  const clickHandler = () => {
    navigation.navigate('CreateNote')
  }

  return (
    <SafeAreaView style={styles.container}>
        <FlatList
          data={items}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Note title={item.title} category={item.category} text={item.text} date={item.date} />
          )}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={clickHandler}
          style={styles.touchableOpacityStyle}>
          <Entypo name="plus" size={45} color="black" />
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