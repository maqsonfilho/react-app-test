import { FC } from 'react';
import { ButtonProps } from '~/@types/components/Button/button-props';

export const ButtonLabel: FC<ButtonProps> = ({ label }) => {
  return <span>{label}</span>;
};
