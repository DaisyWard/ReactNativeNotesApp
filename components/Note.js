import { StyleSheet, View, Text } from "react-native"

const Note = ({title}) => {
  return (
    <View style={styles.wrapper}>
      <Text>{title}</Text>
    </View>
  )
}

export default Note

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: 150,
    borderWidth: 1,
    margin: 20
  }
});