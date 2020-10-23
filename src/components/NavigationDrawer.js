import React from 'react';
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

function NavigationDrawer({navigation}) {
  return (
    <Container>
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
            <ListItem
              onPress={() => navigation.navigate('Notifications')}
              style={styles.list}>
              <Icon type="MaterialIcons" name="favorite" style={styles.icon} />
              <Text style={styles.listText}>Выбрать расписание</Text>
            </ListItem>
            <ListItem
              onPress={() => navigation.navigate('Notifications')}
              style={styles.list}>
              <Icon type="MaterialIcons" name="add" style={styles.icon} />
              <Text style={styles.listText}>Загрузить готовое</Text>
            </ListItem>
            <ListItem
              onPress={() => navigation.navigate('Notifications')}
              style={styles.listPadding}>
              <Icon type="MaterialIcons" name="code" style={styles.icon} />
              <Text style={styles.listText}>Ввести ссылку</Text>
            </ListItem>

            {/* Open JSON file */}
            <ListItem onPress={() => readJson()} style={styles.listPadding}>
              <Icon type="MaterialIcons" name="folder" style={styles.icon} />
              <Text style={styles.listText}>из файла JSON</Text>
            </ListItem>
            {/* / Open JSON file */}

            <ListItem
              onPress={() => navigation.navigate('Notifications')}
              style={styles.listPadding}>
              <Icon type="MaterialIcons" name="camera" style={styles.icon} />
              <Text style={styles.listText}>Сканировать QR</Text>
            </ListItem>
            <ListItem
              onPress={() => navigation.navigate('Notifications')}
              style={styles.list}>
              <Icon type="MaterialIcons" name="settings" style={styles.icon} />
              <Text style={styles.listText}>Настройки приложения</Text>
            </ListItem>
          </List>
          {/* / Navigatiob List */}
        </Content>
      </Content>
    </Container>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingLeft: 16,
    height: 160,
    borderBottomColor: 'rgba(0, 0, 0, 0.12)',
    borderBottomWidth: 1,
  },
  headerText: {
    color: '#722DD3',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.15,
    paddingTop: 100,
  },
  userText: {
    color: '#722DD3',
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

    color: 'rgba(114, 45, 211, 0.87)',
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
    color: 'rgba(114, 45, 211, 0.87)',
  },
});

export default NavigationDrawer;
