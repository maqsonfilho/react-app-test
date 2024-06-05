import { FC } from 'react';
import { TableCellProps } from '~/@types/components/Table/table-cell-props';
import { StyledTableCell } from './style';

export const TableCell: FC<TableCellProps> = ({ children, colSpan, size }) => {
  return (
    <StyledTableCell colSpan={colSpan} style={{ width: size }}>
      {children}
    </StyledTableCell>
  );
};
