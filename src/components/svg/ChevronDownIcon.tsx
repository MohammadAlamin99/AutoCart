import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronDownIcon = ({
  width = 16,
  height = 16,
  color = '#9CA3AF',
  strokeWidth = 2.25,
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        d="M4.66699 6.66675L8.00033 10.0001L11.3337 6.66675"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ChevronDownIcon;
