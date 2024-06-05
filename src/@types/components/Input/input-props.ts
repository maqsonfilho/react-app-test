import React, { ChangeEventHandler, ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';

export type InputType = 'email' | 'password' | 'search' | 'tel' | 'text' | 'number' | 'select' | 'file';

export interface InputProps {
  changeIcon?: string | Element;
  className?: string;
  disabled?: boolean;
  errorDescription?: string;
  hasError?: boolean;
  icon?: ReactNode;
  isVisible?: boolean;
  label?: string;
  maxLength?: number;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onIconClick?: React.MouseEventHandler;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  position?: 'top' | 'bottom';
  theme?: DefaultTheme;
  type?: InputType;
  value?: string | number;
}
