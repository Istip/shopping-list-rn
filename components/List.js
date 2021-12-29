import { StyleSheet, StatusBar, Text, View, FlatList } from 'react-native';
import ListItem from './ListItem';

const List = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.list}
        renderItem={({ item }) => (
          <ListItem item={item} getTodos={props.getTodos} />
        )}
        keyExtractor={(item) => item._id}
      />
      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignSelf: 'stretch',
  },
});

export default List;
