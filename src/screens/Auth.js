import React from 'react';
import {Container, Content} from 'native-base';
import {TextInput} from 'react-native';
import {StyleSheet} from 'react-native';

import {Input} from '../components/Input';

function Auth() {
  const [email, setEmail] = React.useState('1');
  const [password, setPassword] = React.useState('2');
  const [confurmPassword, setConfurmPassword] = React.useState('');
  const [fullName, setFullName] = React.useState('');

  const onChangeEmail = (email) => {
    setEmail(email);
  };

  const onChangePassword = (password) => {
    setPassword(password);
  };

  const onChangeFullName = (email) => {};

  const onChangeConfurmPassword = (email) => {};

  return (
    <Container style={styles.container}>
      <Content style={styles.logo}></Content>
      <Input
        text={email}
        onChangeText={(text) => onChangeEmail(text)}
        placeholder="Email"
      />
      <Input
        text={password}
        onChangeText={(text) => onChangePassword(text)}
        placeholder="Password"
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
  },
  logo: {
    // backgroundColor: 'red',
  },
  input: {
    width: '100%',
    height: 55,
    backgroundColor: '#FFFFFF',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#BB86FC',
  },
});

export default Auth;
