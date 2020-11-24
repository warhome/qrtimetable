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
  View,
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
      <Right style={styles.right}>
        <Button
          transparent
          style={styles.optionbtn}
          onPress={() => setWeekMod(!weekMod)}>
          <Text style={styles.modifBtn}>
            {weekMod ? 'ЧИСЛИТЕЛЬ' : 'ЗНАМЕНАТЕЛЬ'}
          </Text>
        </Button>
        <View style={weekMod ? styles.markerEven : styles.markerOdd}></View>
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
    height: 25,
    fontFamily: 'rubik_medium',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.15,
    color: 'rgba(138, 55, 255, 0.75)',
  },

  optionbtn: {
    height: 20,
    width: 160,
    textAlign: 'center',
    marginTop: 3,
  },

  modifBtn: {
    color: 'rgba(138, 55, 255, 0.75)',
    paddingTop: 5,
    fontFamily: 'rubik_medium',
    textAlign: 'center',
  },

  right: {
    flexDirection: 'column',
  },

  markerEven: {
    height: 2,
    width: 50,
    backgroundColor: 'rgba(103, 0, 250, 0.87)',
    marginRight: 55,
  },
  markerOdd: {
    height: 2,
    width: 70,
    backgroundColor: 'rgba(103, 0, 250, 0.87)',
    marginRight: 35,
  },
});

export default MainAppBar;
