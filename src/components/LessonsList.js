import React from 'react';
import {Container, Content, List} from 'native-base';
import {useTheme} from '@react-navigation/native';

import Card from './LessonCard';

const isActiveLessonTime = (currentTime, lessonTime) => {
  const [lessonTimeStart, lessonTimeEnd] = lessonTime.split('-');
  const [lessonHoursStart, lessonMinStart] = lessonTimeStart.split(':');
  const [lessonHoursEnd, lessonMinEnd] = lessonTimeEnd.split(':');

  if (
    Number(currentTime.hours) > Number(lessonHoursStart) &&
    Number(currentTime.hours) < Number(lessonHoursEnd)
  ) {
    return true;
  }

  if (Number(currentTime.hours) === Number(lessonHoursStart)) {
    if (Number(currentTime.min) >= Number(lessonMinStart)) return true;
    else return false;
  }

  if (Number(currentTime.hours) === Number(lessonHoursEnd)) {
    if (Number(currentTime.min) <= Number(lessonMinEnd)) return true;
    else return false;
  }
  return false;
};

const LessonsList = ({dayLessons, weekMod, currentTime, isCurrentDayWeek}) => {
  const {colors} = useTheme();
  return (
    <Container style={{backgroundColor: colors.back}}>
      <Content>
        <List>
          {dayLessons &&
            dayLessons.map((item) => {
              if (
                item.weekModificator === 'any' ||
                item.weekModificator === weekMod
              )
                return (
                  <Card
                    key={item.time}
                    lesson={item}
                    isActiveLesson={
                      isCurrentDayWeek &&
                      isActiveLessonTime(currentTime, item.time)
                    }
                  />
                );
            })}
        </List>
      </Content>
    </Container>
  );
};

export default LessonsList;
