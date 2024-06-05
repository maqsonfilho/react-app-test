import { FC } from 'react';
import { IconContainer } from './style';
import { InputProps } from '~/@types/components/Input/input-props';

export const InputIcon: FC<InputProps> = ({ icon, onIconClick }) => {
  return <IconContainer onClick={onIconClick}>{icon}</IconContainer>;
};
