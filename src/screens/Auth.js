import React from 'react';
import {Container, Content} from 'native-base';
import {TextInput} from 'react-native';

function Auth() {
  return (
    <Container>
      <Content></Content>
      <Content>
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 337,
    height: 55,
    border: '1 solid #BB86FC',
  },
});

export default Auth;
