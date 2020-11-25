import {NavigationContainer, DarkTheme} from '@react-navigation/native';

const QrDark = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    back: '#252525',
    backLight: '#2D2D2D',
    backDark: '#121212',
    accent: '#5653FF',
    text: '#D2D2D2',
    header: '#2D2D2D',
    textUnactive: '#535353',
  },
};

export default QrDark;
