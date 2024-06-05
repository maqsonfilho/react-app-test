import { FC } from 'react';
import { InputProps } from '~/@types/components/Input/input-props';
import { Eye } from '~/components/Icons/Eye';
import { EyeSlash } from '~/components/Icons/Eye-Slash';

export const InputPasswordVisibilityToggle: FC<InputProps> = ({ isVisible, onIconClick }) => {
  return <div onClick={onIconClick}>{isVisible ? <Eye /> : <EyeSlash />}</div>;
};
