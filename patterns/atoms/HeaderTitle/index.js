import { View, Text } from 'react-native';
import React from 'react';
import { FONTS } from '../../../constants';
import { object, string } from 'prop-types';

const HeaderTitle = ({ title, titleContainerStyles, titleWrapperStyles }) => {
  return (
    <View style={titleContainerStyles}>
      <View style={titleWrapperStyles}>
        <Text style={{ ...FONTS.h3}}>{title}</Text>
      </View>
    </View>
  );
};

HeaderTitle.propTypes = {
  title: string,
  titleContainerStyles: object,
  titleWrapperStyles: object
};

export default HeaderTitle;
