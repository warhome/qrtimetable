import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

const QrLight = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    back: '#FFFFFF',
    backLight: '#FFFFFF',
    backDark: '#FAFAFA',
    accent: '#B04DFE',
    text: '#B04DFE',
    header: '#FFFFFF',
    textUnactive: '#535353',
  },
};

export default QrLight;
