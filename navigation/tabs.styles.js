import { StyleSheet } from 'react-native';
import { COLORS } from '../constants';

export default StyleSheet.create({
  customTabBarStyles: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 30,
    backgroundColor: COLORS.white
  },
  tabBarCustomButtonContainer: { 
    flex: 1, 
    alignItems: 'center',
  },
  tabBarCustomButtonSVGWrapper: { 
    flexDirection: 'row',
    position: 'absolute',
    top: 0
  },
  tabBarCustomButtonBorder: { 
    flex: 1,
    backgroundColor: COLORS.white
  },
  tabBarCustomButtonStyles: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.white
  },
  tabBarCommonButtonStyles: {
    flex: 1,
    height: 60,
    backgroundColor: COLORS.white
  },
  tabBarStyles: { 
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    elevation: 0
  },
});