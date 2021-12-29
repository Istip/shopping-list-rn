import { Button, View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const Item = ({ text }) => <Text style={styles.text}>{text}</Text>;

const ListItem = ({ item, getTodos }) => {
  // Change completed status of the list item
  const handleCompleteStatus = (id) => {
    axios
      .put(`https://isti-list.herokuapp.com/todos/${id}`)
      .then(() => getTodos())
      .catch((error) => console.log(error));
  };

  return (
    <View
      style={[styles.item, item.completed ? styles.inactive : styles.active]}
    >
      <Item text={item.text} completed={item.completed} />

      <View>
        <View style={styles.btn}>
          <Button
            title={item.completed ? 'Undo' : 'Finish'}
            color="#61ba40"
            onPress={() => handleCompleteStatus(item._id)}
          />
        </View>

        <View style={styles.btn}>
          <Button
            title="Delete"
            color="#FB543F"
            onPress={() => Alert.alert(`Delete ${item.text}?`)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#0D0D1A',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 16,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  btn: {
    marginLeft: 20,
    marginVertical: 4,
  },

  text: {
    fontSize: 18,
    color: '#e1fef1',
    flex: 1,
  },

  active: {
    opacity: 1,
  },

  inactive: {
    opacity: 0.5,
  },
});

export default ListItem;
