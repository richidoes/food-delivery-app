import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import Svg, { Path } from 'react-native-svg';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { element, func, object } from 'prop-types';

import { Home } from '../screens';

import { COLORS, icons } from '../constants';
import styles from './tabs.styles';

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {
  const isSelected = accessibilityState.selected;
  return isSelected ? (
    <View style={styles.tabBarCustomButtonContainer}>
      <View style={styles.tabBarCustomButtonSVGWrapper}>
        <View style={styles.tabBarCustomButtonBorder}></View>
        <Svg
          width={70}
          height={58}
          viewBox="0 0 75 61"
        >
          <Path
            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
            fill={COLORS.white}
          />
        </Svg>
        <View style={styles.tabBarCustomButtonBorder}></View>
      </View>
      <TouchableOpacity
        style={styles.tabBarCustomButtonStyles}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    </View>
  ) : (
    <TouchableOpacity
      style={styles.tabBarCommonButtonStyles}
      activeOpacity={1}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

const CustomTabBar = ({ props }) => {
  return isIphoneX() ? (
    <View>
      <View style={styles.customTabBarStyles} />
      <BottomTabBar {...props} />
    </View>
  ) :  (<BottomTabBar {...props} /> );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyles
      }}
      tabBar={(props) => (
        <CustomTabBar props={props} />
      )}
    >
      <Tab.Screen 
        name='Home'
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image 
              source={icons.cutlery}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary
              }}
            />
          ),
          tabBarButton: (props) => (
            <TabBarCustomButton
              {...props}
            />
          )
        }}
      />
      <Tab.Screen 
        name='Search'
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image 
              source={icons.search}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary
              }}
            />
          ),
          tabBarButton: (props) => (
            <TabBarCustomButton
              {...props}
            />
          )
        }}
      />
      <Tab.Screen 
        name='Like'
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image 
              source={icons.like}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary
              }}
            />
          ),
          tabBarButton: (props) => (
            <TabBarCustomButton
              {...props}
            />
          )
        }}
      />
      <Tab.Screen 
        name='User'
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image 
              source={icons.user}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary
              }}
            />
          ),
          tabBarButton: (props) => (
            <TabBarCustomButton
              {...props}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
};

/**
 * Prop-Types
 */
TabBarCustomButton.propTypes = {
  accessibilityState: object,
  children: element,
  onPress: func
};

CustomTabBar.propTypes = {
  props: object
};

export default Tabs;