import React from 'react';
import {useTheme} from '@react-navigation/native';

import {
  Button,
  Container,
  Content,
  List,
  ListItem,
  Text,
  Icon,
} from 'native-base';
import {StyleSheet} from 'react-native';
import openJsonFile from '../picker';

const readJson = () => {
  openJsonFile();
};

const menuItes = [
  {name: 'Выбрать расписание', iconName: 'favorite'},
  {name: 'Загрузить готовое', iconName: 'keyboard-arrow-down'},
  {name: 'Ввести ссылку', iconName: 'code'},
  {name: 'из файла JSON', iconName: 'folder-open', onPress: () => readJson()},
  {name: 'Сканировать QR', iconName: 'camera-enhance'},
  {name: 'Редактировать', iconName: 'keyboard-arrow-down'},
  {name: 'Изменить пары', iconName: 'edit'},
  {name: 'Удалить расписание', iconName: 'delete-forever'},
  {name: 'Настройки приложения', iconName: 'settings'},
];

function NavigationDrawer({navigation}) {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    container: {
      width: 270,
      backgroundColor: colors.back,
    },
    header: {
      flexDirection: 'row',
      paddingLeft: 16,
      height: 110,
      borderBottomColor: colors.backDark,
      borderBottomWidth: 1,
    },
    headerText: {
      fontFamily: 'rubik_normal',
      color: colors.text,
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 20,
      lineHeight: 24,
      letterSpacing: 0.15,
      paddingTop: 50,
    },
    userText: {
      fontFamily: 'rubik_normal',
      color: colors.text,
      fontWeight: '100',
      fontSize: 10,
      lineHeight: 16,
      letterSpacing: 0.15,
    },
    loginBtn: {
      left: 0,
      paddingStart: 200,
      paddingBottom: 30,
    },
    listContainer: {
      paddingTop: 10,
    },
    listText: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 14,
      lineHeight: 20,

      letterSpacing: 0.25,

      color: colors.text,
      paddingLeft: 20,
    },
    list: {
      height: 40,
      borderBottomWidth: 0,
    },
    listPadding: {
      height: 40,
      borderBottomWidth: 0,
      marginLeft: 45,
    },
    icon: {
      // scaleX: 0.8,
      // scaleY: 0.8,
      color: colors.text,
    },
  });

  return (
    <Container style={styles.container}>
      <Content>
        {/* Header */}
        <Content style={styles.header}>
          <Text style={styles.headerText}>Вход не выполнен</Text>
          {/* <Text style={styles.userText}></Text> */}
          <Button transparent style={styles.loginBtn}>
            <Text style={styles.userText}>войти</Text>
          </Button>
        </Content>
        {/* / Header */}
        {/* Navigatiob List */}
        <Content style={styles.listContainer}>
          <List>
            {menuItes.map((item, index) => {
              return (
                <ListItem
                  onPress={item.onPress}
                  style={
                    index === 0 || index === 1 || index === 5 || index === 8
                      ? styles.list
                      : styles.listPadding
                  }>
                  <Icon
                    type="MaterialIcons"
                    name={item.iconName}
                    style={styles.icon}
                  />
                  <Text style={styles.listText}>{item.name}</Text>
                </ListItem>
              );
            })}
          </List>
          {/* / Navigatiob List */}
        </Content>
      </Content>
    </Container>
  );
}

export default NavigationDrawer;
