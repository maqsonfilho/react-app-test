import { FC } from 'react';
import { TableRowProps } from '~/@types/components/Table/table-row-props';
import { StyledTableRow } from './style';

export const TableRow: FC<TableRowProps> = ({ children }) => {
  return <StyledTableRow>{children}</StyledTableRow>;
};
