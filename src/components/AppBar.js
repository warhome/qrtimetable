import React from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

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
import {color} from 'react-native-reanimated';

function MainAppBar({navigation, weekMod, setWeekMod}) {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    header: {
      backgroundColor: colors.header,
    },

    mainColor: {
      color: colors.text,
    },

    title: {
      height: 25,
      fontFamily: 'rubik_medium',
      fontWeight: '500',
      fontSize: 20,
      lineHeight: 24,
      letterSpacing: 0.15,
      color: colors.text,
    },

    optionbtn: {
      height: 20,
      width: 160,
      textAlign: 'center',
      marginTop: 3,
    },

    modifBtn: {
      color: colors.text,
      paddingTop: 5,
      fontFamily: 'rubik_medium',
      textAlign: 'center',
    },

    right: {
      flexDirection: 'column',
    },

    markerOdd: {
      height: 2,
      width: 50,
      backgroundColor: colors.accent,
      marginRight: 55,
    },
    markerEven: {
      height: 2,
      width: 70,
      backgroundColor: colors.accent,
      marginRight: 35,
    },
  });

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
            {weekMod ? 'ЗНАМЕНАТЕЛЬ' : 'ЧИСЛИТЕЛЬ'}
          </Text>
        </Button>
        <View style={weekMod ? styles.markerEven : styles.markerOdd}></View>
      </Right>
    </Header>
  );
}

export default MainAppBar;
