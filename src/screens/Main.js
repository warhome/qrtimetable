import React from 'react';
import {StyleSheet} from 'react-native';

import LessonsList from '../components/LessonsList';
import MainAppBar from '../components/AppBar';

import {Container, Tab, Tabs, ScrollableTab, Text} from 'native-base';

import AsyncStorage from '@react-native-async-storage/async-storage';

const daysOfWeek = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

const getDate = () => {
  let cashe = {};
  return () => {
    if (Object.keys(cashe).length === 0 && cashe.constructor === Object) {
      const day = new Date().getDay(); // Current day of the week
      const hours = new Date().getHours(); // Current hours
      const min = new Date().getMinutes(); // Current minutes
      cashe = {day: day - 1, hours, min};
    }
    return cashe;
  };
};

const Main = ({navigation}) => {
  const getSelectedTimetable = async () => {
    try {
      const value = await AsyncStorage.getItem('@selectedTimetable');
      setTimeTable(JSON.parse(JSON.parse(value)));
    } catch (e) {
      // error reading value
    }
    return;
  };
  const memoDate = getDate();
  const [weekMod, setWeekMod] = React.useState(true);
  const [currentDay, setCurrentDay] = React.useState(memoDate().day);
  const [currentTab, setCurrentTab] = React.useState(false);
  const [initTab, setInitTab] = React.useState(memoDate().day);
  const [currentTime, setCurrentTime] = React.useState({
    hours: memoDate().hours,
    min: memoDate().min,
  });

  const [timeTable, setTimeTable] = React.useState({});

  console.log(timeTable);

  React.useEffect(() => {
    // Hack for working initial tab
    setTimeout(() => {
      Number(currentDay) > 0 && Number(currentDay) < 6
        ? setInitTab(initTab)
        : setInitTab(0);
    }, 0);
    getSelectedTimetable();
  }, []);

  return (
    <Container style={styles.container}>
      <MainAppBar
        navigation={navigation}
        weekMod={weekMod}
        setWeekMod={setWeekMod}
      />
      <Tabs
        initialPage={Number(initTab)}
        renderTabBar={() => (
          <ScrollableTab
            style={styles.scroll}
            underlineStyle={styles.underLine}
          />
        )}
        onChangeTab={({i}) => setCurrentTab(i)}
        page={currentTab === false ? Number(initTab) : currentTab}>
        {daysOfWeek.map((item, index) => {
          return (
            <Tab
              key={item}
              textStyle={styles.unactiveTab}
              heading={
                index === Number(currentDay)
                  ? `• ${item.toUpperCase()}`
                  : `${item.toUpperCase()}`
              }
              tabStyle={styles.header}
              activeTabStyle={(styles.tab, styles.header)}
              activeTextStyle={styles.mainColor}>
              <LessonsList
                weekMod={weekMod ? 'odd' : 'edd'} // числитель или знаменатель
                dayLessons={timeTable.lessons ? timeTable.lessons[item] : []}
                currentTime={currentTime}
                isCurrentDayWeek={index === Number(currentDay)}
              />
            </Tab>
          );
        })}
      </Tabs>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 24,
    /* identical to box height */
    letterSpacing: 0.15,
    color: 'rgba(103, 0, 250, 0.87)',
  },

  scroll: {
    paddingStart: 35,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.12)',
  },

  mainColor: {
    color: 'rgba(114, 45, 211, 0.65)',
  },

  modifBtn: {
    color: 'rgba(114, 45, 211, 0.65)',
    paddingTop: 5,
  },

  unactiveTab: {
    color: 'rgba(83, 83, 83, 0.6)',
  },

  header: {
    backgroundColor: '#ffffff',
  },

  underLine: {
    backgroundColor: 'rgba(114, 45, 211, 0.65)',
    height: 2,
  },

  optionbtn: {
    marginEnd: 10,
    width: 160,
  },
});

export default Main;
