import { StyleSheet, Text, Pressable } from "react-native"

const Note = ({ title, category, text, date }) => {
  const openNote = () => {
    console.log('open')
  }

  var formattedDate =
    ("0" +  new Date(date).getUTCDate()).slice(-2) + "/" +
    ("0" + (new Date(date).getUTCMonth() + 1)).slice(-2) + "/" +
    new Date(date).getUTCFullYear() + " " +
    ("0" + new Date(date).getUTCHours()).slice(-2) + ":" +
    ("0" + new Date(date).getUTCMinutes()).slice(-2)

  return (
    <Pressable style={styles.wrapper} onPress={() => openNote()}>
      <Text style={styles.date}>{formattedDate}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.category}>{category}</Text>
      <Text numberOfLines={2} style={styles.text}>{text}</Text>
    </Pressable>
  )
}

export default Note

const styles = StyleSheet.create({
  wrapper: {
    flex: 0.5,
    //maxHeight: 150,
    margin: 3,
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#009389',
    overflow: 'hidden'
  },
  date: {
    display: 'flex',
    //alignSelf: 'flex-end',
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