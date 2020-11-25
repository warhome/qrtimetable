import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

function Card({lesson, isActiveLesson}) {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    card: {
      backgroundColor: colors.backLight,
      borderColor: colors.backDark,
      borderTopWidth: 1,
      borderBottomWidth: 2,
      flexDirection: 'row',
    },

    activeCard: {
      backgroundColor: colors.backLight,
      // borderColor: '#E9E9E9',
      borderTopWidth: 2,
      flexDirection: 'row',

      borderTopColor: colors.backDark,
      borderBottomColor: colors.backDark,
      borderRightColor: colors.accent,
      borderLeftColor: colors.accent,

      borderRightWidth: 5,
      borderLeftWidth: 5,
    },

    time: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: 100,
      width: 55,
    },

    timeText: {
      fontFamily: 'rubik_regular',
      fontSize: 15,
      color: colors.text,
      marginStart: 12,
      marginVertical: 12,
    },

    lessonInfo: {
      flexDirection: 'column',
    },

    weekModAndRoom: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 300,
    },

    weekMod: {
      fontFamily: 'rubik_regular',
      marginTop: 12,
      marginStart: 20,
      color: colors.text,
    },

    weekRoom: {
      marginTop: 12,
      marginEnd: 10,
      color: colors.text,
    },

    lessonName: {
      fontFamily: 'roboto_medium',
      marginTop: 6,
      marginStart: 20,
      color: colors.text,
      fontSize: 18,
    },

    lessonTeacher: {
      fontFamily: 'rubik_regular',
      marginTop: 8,
      marginStart: 20,
      color: colors.text,
      fontSize: 14,
    },
  });

  return (
    <View style={isActiveLesson ? styles.activeCard : styles.card}>
      <View style={styles.time}>
        <Text style={styles.timeText}>{lesson.time.split('-')[0]}</Text>
        <Text style={styles.timeText}>{lesson.time.split('-')[1]}</Text>
      </View>
      <View style={styles.lessonInfo}>
        <View style={styles.weekModAndRoom}>
          <Text style={styles.weekMod}>
            {lesson.weekModificator === 'edd'
              ? 'ЧИСЛ'
              : lesson.weekModificator === 'odd'
              ? 'ЗНАМ'
              : 'ЧИСЛ / ЗНАМ'}
          </Text>
          <Text style={styles.weekRoom}>
            {typeof lesson.room === 'string'
              ? lesson.room
              : lesson.room.join(' / ')}
          </Text>
        </View>
        <Text style={styles.lessonName}>{lesson.name}</Text>
        <Text style={styles.lessonTeacher}>{lesson.teacher}</Text>
      </View>
    </View>
  );
}

export default Card;
