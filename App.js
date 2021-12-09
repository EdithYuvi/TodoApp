import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/todoitem';
import AddTodos from './components/addTodo';
import { StatusBar } from 'expo-status-bar';



export default function App() {

  const [todos, setTodos] = useState([
    { text: 'Buy Coffe', key: '1' },
    { text: 'Create an app', key: '2' },
    { text: 'Play on the switch', key: '3' },
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });

  }

  const submitHandler = (text) => {

    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else {
      Alert.alert('OOPS!', 'Todos Must be over 3 character Long...', [
        { text: 'Understood', onPress: () => console.log('Alert Closed') }
      ]);
    }

  }
  return (
    <TouchableWithoutFeedback onPress={() => {
    }}>
      <View style={styles.container}>
        <StatusBar style="light"/>
        <Header />
        <View style={styles.content}>
          <AddTodos submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
  },
  content: {
    flex : 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
});