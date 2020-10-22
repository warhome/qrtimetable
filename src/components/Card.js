import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function Card({lesson, isActiveLesson}) {
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

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fafafa',
    borderColor: '#E9E9E9',
    borderTopWidth: 2,
    flexDirection: 'row',
  },

  activeCard: {
    backgroundColor: '#fafafa',
    // borderColor: '#E9E9E9',
    borderTopWidth: 2,
    flexDirection: 'row',

    borderTopColor: '#E9E9E9',
    borderBottomColor: '#E9E9E9',
    borderRightColor: '#8A37FF',
    borderLeftColor: '#8A37FF',

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
    fontSize: 15,
    color: '#9C56FF',
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
    marginTop: 12,
    marginStart: 20,
    color: '#9C56FF',
  },

  weekRoom: {
    marginTop: 12,
    marginEnd: 10,
    color: '#9C56FF',
  },

  lessonName: {
    marginTop: 8,
    marginStart: 20,
    color: '#9C56FF',
    fontSize: 18,
  },

  lessonTeacher: {
    marginTop: 4,
    marginStart: 20,
    color: '#9C56FF',
    fontSize: 14,
  },
});

export default Card;
