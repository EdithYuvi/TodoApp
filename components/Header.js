import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My ToDos App</Text>
      <Entypo
        style={styles.logoutIcon}
        name='login'
        size={18}
        color='#fff' />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1565C0',
    flexDirection: 'row',
  },
  logoutIcon: {
    padding: 20,
    marginTop: 20
  },
  title: {
    marginTop: 15,
    marginLeft: 30,
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});