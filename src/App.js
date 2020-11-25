import React from 'react';
import {StatusBar} from 'react-native';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import SplashScreen from 'react-native-splash-screen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import Main from './screens/Main';
import HomeScreen from './screens/HomeScreen';
import Auth from './screens/Auth';
import NavigationDrawer from './components/NavigationDrawer';

import QrDark from './themes/dark';
import QrLight from './themes/light';

const Drawer = createDrawerNavigator();

function App() {
  // Show splash screen when App is first time render
  React.useEffect(() => {
    SplashScreen.hide();
    StatusBar.setHidden(true);
  });
  // Get system color scheme
  const scheme = useColorScheme();

  return (
    <AppearanceProvider>
      <NavigationContainer
        NavigationContainer
        theme={scheme === 'dark' ? QrDark : QrLight}>
        <Drawer.Navigator
          initialRouteName="Main"
          drawerContent={(props) => <NavigationDrawer {...props} />}>
          <Drawer.Screen name="Main" component={Main} />
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Notifications" component={Main} />
          <Drawer.Screen name="Auth" component={Auth} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
}

export default App;
