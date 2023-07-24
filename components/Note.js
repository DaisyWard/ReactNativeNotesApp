import { StyleSheet, View, Text } from "react-native"

const Note = ({ title, category, text, date }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.category}>{category}</Text>
      <Text numberOfLines={2} style={styles.text}>{text}</Text>
    </View>
  )
}

export default Note

const styles = StyleSheet.create({
  wrapper: {
    flex: 0.5,
    //maxHeight: 150,
    margin: 15,
    borderRadius: 5,
    padding: 15,
    backgroundColor: '#009389',
    overflow: 'hidden'
  },
  date: {
    display: 'flex',
    alignSelf: 'flex-end',
    color: '#fff',
    marginBottom: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  category: {
    color: '#fff',
    marginTop: 5,
    marginBottom: 10
  },
  text: {
    color: '#fff',
    fontSize: 16,
    paddingBottom: 20
  }
});