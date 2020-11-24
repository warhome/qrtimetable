import React from 'react';
import {Container, Content} from 'native-base';
import {TextInput} from 'react-native';
import {StyleSheet} from 'react-native';

function Input({text, onChangeText, placeholder}) {
  return (
    <Content>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={placeholder}
      />
    </Content>
  );
}
export default Input;
