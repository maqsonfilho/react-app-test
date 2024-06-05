import { FC } from 'react';
import { InputProps } from '~/@types/components/Input/input-props.tsx';
import { LabelContainer } from './style.ts';

export const InputLabel: FC<InputProps> = ({ label }) => {
  return label ? <LabelContainer>{label}</LabelContainer> : null;
};
