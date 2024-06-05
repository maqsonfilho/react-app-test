import { FC } from 'react';
import { ButtonProps } from '~/@types/components/Button/button-props';
import { ButtonIcon } from './Button-Icon/button-icon';
import { ButtonLabel } from './Button-Label/button-label';
import { ButtonContainer } from './style';

export const Button: FC<ButtonProps> = ({ color, disabled, label, onClick, style, loading, type }) => {
  return (
    <ButtonContainer color={color} onClick={onClick} style={style} disabled={disabled} type={type}>
      <ButtonIcon loading={loading} />
      <ButtonLabel label={label} />
    </ButtonContainer>
  );
};
