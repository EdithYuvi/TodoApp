import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, YellowBox } from 'react-native';


export default function AddTodos({ submitHandler }) {

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='Add new Todo......'
                onChangeText={changeHandler}
            />
            <Button
                onPress={() => submitHandler(text)}
                title="Add Task"
                color='#1565C0'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 20,
        paddingHorizontal: 8,
        fontSize: 18,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
})