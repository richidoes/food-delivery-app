import React from 'react';
import {  SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { element, object } from 'prop-types';

import { COLORS } from '../../../constants';

const Page = ({ children, style }) => {
  return (
    <>
      <StatusBar backgroundColor={COLORS.black} />
      <SafeAreaView style={style}>
        <>
          {children}
        </>
      </SafeAreaView>
    </>
  );
};

Page.propTypes = {
  children: element,
  style: object
};

export default Page;
