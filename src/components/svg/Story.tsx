import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Story = ({
  width = 22,
  height = 22,
  color = '#1F2937',
  strokeWidth = 1.5,
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 22 22" fill="none">
      <Path
        d="M9.98 12.67C11.578 13.284 12.54 14.257 13.75 15.75M9.98 12.67C8.037 11.923 6.575 11.728 5.25 11.75M9.98 12.67C11.495 11.004 12.49 9.803 16.25 9.25"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.75 16.75C14.0637 16.75 16.75 14.0637 16.75 10.75C16.75 7.43629 14.0637 4.75 10.75 4.75C7.43629 4.75 4.75 7.43629 4.75 10.75C4.75 14.0637 7.43629 16.75 10.75 16.75Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.75 10.75C20.7509 12.1264 20.4677 13.4881 19.918 14.75M10.75 20.75C12.0635 20.7516 13.3643 20.4937 14.5778 19.991C15.7912 19.4884 16.8934 18.7509 17.821 17.821M0.750008 10.75C0.748388 9.43655 1.00631 8.13572 1.50897 6.92225C2.01162 5.70878 2.74909 4.60659 3.67901 3.679M10.75 0.750002C9.37363 0.749104 8.01188 1.03235 6.75001 1.582M6.75001 19.918C4.43811 18.9074 2.59256 17.0619 1.58201 14.75M14.582 1.75C16.8939 2.76056 18.7395 4.60611 19.75 6.918"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Story;
