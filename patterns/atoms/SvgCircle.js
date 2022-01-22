import { number, object, string } from 'prop-types';
import React from 'react';
import Svg, { Circle } from 'react-native-svg';
import { COLORS } from '../../constants';

const SvgCircle = ({ 
  height = 5, 
  width = 5, 
  cx = 50, 
  cy = 50,
  r = 45, 
  stroke = COLORS.black,
  strokeWidth = 0, 
  fill = COLORS.black,
  style = {}
}) => {
  return (
    <Svg height={`${height}`} width={`${width}`} viewBox="0 0 100 100" style={style}>
      <Circle 
        cx={`${cx}`} 
        cy={`${cy}`} 
        r={`${r}`} 
        stroke={stroke} 
        strokeWidth={`${strokeWidth}`}
        fill={fill} />
    </Svg>
  );
};

SvgCircle.propTypes = {
  height: number,
  width: number,
  cx: number,
  cy: number,
  r: number,
  stroke: string,
  strokeWidth: number,
  fill: string,
  style: object
};

export default SvgCircle;
