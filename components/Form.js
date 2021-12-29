import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const Form = () => {
  const [text, setText] = useState('');

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
        <Button
          title="ADD"
          onPress={() => Alert.alert(`Delete ${item.text}?`)}
        />
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
    borderColor: '#fff',
    alignSelf: 'stretch',
  },

  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Form;
