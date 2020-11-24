import React from 'react';
import {StyleSheet} from 'react-native';

import LessonsList from '../components/LessonsList';
import MainAppBar from '../components/AppBar';

import {Container, Tab, Tabs, ScrollableTab, Text} from 'native-base';

import AsyncStorage from '@react-native-async-storage/async-storage';

const SELECTED_TIMETABLE_FLAG = '@selectedTimetable';

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
  // TODO: Async storage with onChange listener (StorageFacade)
  // [storageFacade, setStorageFacade] = React.useState(null);
  const getSelectedTimetable = async () => {
    try {
      const value = await AsyncStorage.getItem(SELECTED_TIMETABLE_FLAG);
      if (value != null) {
        setTimeTable(JSON.parse(JSON.parse(value)));
        // setStorageFacade(StorageFacade());
      }
    } catch (e) {
      // error reading value
    }
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
  scroll: {
    paddingStart: 35,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.12)',
  },

  mainColor: {
    fontFamily: 'rubik_light',
    color: '#9C56FF',
  },

  unactiveTab: {
    fontFamily: 'rubik_light',
    color: 'rgba(83, 83, 83, 0.6)',
  },

  header: {
    backgroundColor: '#ffffff',
  },

  underLine: {
    backgroundColor: 'rgba(138, 55, 255, 0.75)',
    height: 2,
  },

  optionbtn: {
    marginEnd: 10,
    width: 160,
  },
});

export default Main;
