import React from 'react';

import Main from './screens/Main';
import HomeScreen from './screens/HomeScreen';
import Auth from './screens/Auth';

import NavigationDrawer from './components/NavigationDrawer';

import SplashScreen from 'react-native-splash-screen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function App() {
  // Show splash screen when App is first time render
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Main"
        drawerContent={(props) => <NavigationDrawer {...props} />}>
        <Drawer.Screen name="Main" component={Main} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={Main} />
        <Drawer.Screen name="Auth" component={Auth} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
