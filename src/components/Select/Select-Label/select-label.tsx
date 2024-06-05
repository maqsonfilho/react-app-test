import { FC } from 'react';
import { SelectLabelProps } from '~/@types/components/Select/select-label-props';
import { LabelSelectContainer } from './style';

export const SelectLabel: FC<SelectLabelProps> = ({ label }) => {
  return label ? <LabelSelectContainer>{label}</LabelSelectContainer> : null;
};
