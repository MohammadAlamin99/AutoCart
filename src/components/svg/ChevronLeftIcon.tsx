import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronLeftIcon = ({
  width = 8,
  height = 13,
  color = '#1F2937',
  strokeWidth = 2.25,
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 8 13" fill="none">
      <Path
        d="M6.125 1.125L1.125 6.125L6.125 11.125"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ChevronLeftIcon;
