import { StyleSheet, Text, View } from 'react-native';

const NoteList = () => {
  return (
    <View style={styles.container}>
      <Text>I am a goose</Text>
    </View>
  )
}

export default NoteList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
