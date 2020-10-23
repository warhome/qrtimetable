import React from 'react';
import {StyleSheet} from 'react-native';

import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text,
} from 'native-base';

function MainAppBar({navigation, weekMod, setWeekMod}) {
  return (
    <Header style={styles.header} noShadow>
      <Left>
        <Button onPress={() => navigation.toggleDrawer()} transparent>
          <Icon type="MaterialIcons" name="menu" style={styles.mainColor} />
        </Button>
      </Left>
      <Body>
        <Title style={(styles.mainColor, styles.title)}>QRTimetable</Title>
      </Body>
      <Right>
        <Button
          transparent
          style={styles.optionbtn}
          onPress={() => setWeekMod(!weekMod)}>
          <Text style={styles.modifBtn}>
            {weekMod ? 'ЧИСЛИТЕЛЬ' : 'ЗНАМЕНАТЕЛЬ'}
          </Text>
        </Button>
      </Right>
    </Header>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffffff',
  },

  mainColor: {
    color: 'rgba(114, 45, 211, 0.65)',
  },

  title: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.15,
    color: 'rgba(103, 0, 250, 0.87)',
  },

  optionbtn: {
    marginEnd: 10,
    width: 160,
  },

  modifBtn: {
    color: 'rgba(114, 45, 211, 0.65)',
    paddingTop: 5,
  },
});

export default MainAppBar;
