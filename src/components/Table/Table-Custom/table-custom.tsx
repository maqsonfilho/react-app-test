import { FC } from 'react';
import { TableCustomProps } from '~/@types/components/Table/table-custom-props';
import { StyledTable } from './style';

export const TableCustom: FC<TableCustomProps> = ({ children }) => {
  return <StyledTable>{children}</StyledTable>;
};
