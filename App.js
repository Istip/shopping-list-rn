import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Form from './components/Form';
import List from './components/List';

export default function App() {
  const [list, setList] = useState();
  const [loading, setLoading] = useState(true);

  const getTodos = () => {
    axios
      .get('https://isti-list.herokuapp.com/todos')
      .then((res) => {
        setList(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getTodos();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping list</Text>
      <Form />
      <List list={list} getTodos={getTodos} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#08080F',
  },

  title: {
    fontSize: 32,
    color: '#e1fef1',
    marginTop: 50,
    textAlign: 'center',
  },
});
