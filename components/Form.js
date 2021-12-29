import axios from 'axios';
import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const Form = ({ list, setList, getTodos }) => {
  const [text, setText] = useState('');

  const createItem = () => {
    const data = {
      text,
      createdAt: Date.now(),
    };

    if (!text) {
      return Alert.alert('Please enter item name!');
    }

    return axios
      .post('https://isti-list.herokuapp.com/todos', data)
      .then((res) => {
        setList([res.data, ...list]);
        setText('');
      })
      .then(() => getTodos())
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setText(text)}
          value={text}
          placeholder="Enter text here..."
        />
      </View>

      <View style={styles.btnContainer}>
        <Button title="+ ADD" onPress={createItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 12,
    padding: 10,
  },

  inputContainer: {
    flex: 1,
    marginRight: 20,
  },

  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    color: '#e1e1e1',
    alignSelf: 'stretch',
    borderRadius: 12,
  },

  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Form;
