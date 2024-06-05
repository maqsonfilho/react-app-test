import { FC } from 'react';
import { SelectOptionsProps } from '~/@types/components/Select/select-options-props';
import { SelectOptionsStyle } from './style';

export const SelectOptions: FC<SelectOptionsProps> = ({ value, onSelect, children }) => {
  const handleSelect = () => {
    onSelect(value);
  };

  return <SelectOptionsStyle onClick={handleSelect}>{children}</SelectOptionsStyle>;
};
