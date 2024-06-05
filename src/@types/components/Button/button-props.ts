import React from 'react';

export type ButtonColor = 'primary' | 'secondary' | 'ternary';

export interface ButtonProps {
  color?: ButtonColor;
  disabled?: boolean;
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: string;
  style?: React.CSSProperties;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
}
