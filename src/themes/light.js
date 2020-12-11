import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

const QrLight = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    back: '#FFFFFF',
    backLight: '#FAFAFA',
    backDark: '#FAFAFA',
    accent: '#C787FA',
    text: '#C787FA',
    header: '#FFFFFF',
    textUnactive: '#535353',
  },
};

export default QrLight;
