import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
        <Text style={styles.title}>My ToDos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
      height:80,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: 'coral',
  },
  title:{
    marginTop:15,
     alignItems:'center',
      textAlign: 'center',
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
  }
});