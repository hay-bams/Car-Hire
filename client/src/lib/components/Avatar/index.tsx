import React from 'react';
import { Avatar } from 'antd';

interface otherSizes {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}

interface Props {
  name: string | null;
  size?: number | 'small' | 'large' | otherSizes;
  src?: string | null;
  className?: string
}

const colors = [
  '#7265e6',
  '#f56a00',
  '#00a2ae',
  '#FF6633',
  '#00B3E6',
  '#3366E6',
  '#999966',
  '#B34D4D',
  '#80B300',
  '#809900',
  '#6680B3',
  '#66991A',
  '#FF1A66',
  '#E6331A',
  '#66994D',
  '#B366CC',
  '#4D8000',
  '#B33300',
  '#66664D',
  '#1AB399',
  '#4D8066',
  '#809980',
  '#4D80CC',
  '#9900B3',
  '#E64D66',
  '#4DB380',
  '#FF4D4D',
  '#99E6E6',
  '#6666FF',
];

export const UserAvatar = ({ name, size, src, className }: Props) => {
  const getAlphebetPosition = (letter: string): number => {
    const code = letter.toUpperCase().charCodeAt(0);
    if (code > 64 && code < 91) {
      return code - 64 - 1;
    }
    return 0;
  };

  const firstLetter = name ? name[0].toUpperCase() : '';
  const AvatarColor = colors[getAlphebetPosition(firstLetter)];
  return (
    <>
      <Avatar
        src={src}
        size={size}
        className={className}
        style={
          !src
            ? { backgroundColor: AvatarColor, verticalAlign: 'middle' }
            : undefined
        }
        gap={4}
      >
        {firstLetter}
      </Avatar>
    </>
  );
};
