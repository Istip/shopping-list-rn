import axios from 'axios';
import moment from 'moment';
import { Button, View, Text, StyleSheet } from 'react-native';

const Item = ({ text }) => <Text style={styles.text}>{text}</Text>;

const ListItem = ({ item, getTodos }) => {
  // Change completed status of the list item
  const handleCompleteStatus = (id) => {
    axios
      .put(`https://isti-list.herokuapp.com/todos/${id}`)
      .then(() => getTodos())
      .catch((error) => console.log(error));
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://isti-list.herokuapp.com/todos/${id}`)
      .then(() => getTodos())
      .catch((error) => console.log(error));
  };

  return (
    <View
      style={[styles.item, item.completed ? styles.inactive : styles.active]}
    >
      <View style={styles.itemWrapper}>
        <Item text={item.text} completed={item.completed} />
        <Text style={styles.mutedText}>{moment(item.createdAt).fromNow()}</Text>
      </View>

      <View style={styles.btnGroup}>
        <View style={styles.btn}>
          <Button
            title="Delete"
            color="#FB543F"
            onPress={() => handleDelete(item._id)}
          />
        </View>

        <View style={styles.btn}>
          <Button
            title={item.completed ? 'Undo' : 'Finish'}
            color="#61ba40"
            onPress={() => handleCompleteStatus(item._id)}
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

  itemWrapper: {
    flex: 1,
  },

  btn: {
    marginLeft: 5,
  },

  btnFirst: {
    marginRight: 5,
  },

  btnGroup: {
    flexDirection: 'row',
  },

  mutedText: {
    color: '#555555',
  },

  text: {
    fontSize: 18,
    color: '#e1e1e1',
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
