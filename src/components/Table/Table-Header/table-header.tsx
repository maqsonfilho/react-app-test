import { FC } from 'react';
import { TableHeaderProps } from '~/@types/components/Table/table-header-props';
import { TableCell } from '../Table-Cell/table-cell';
import { TableRow } from '../Table-Row/table-row';
import { StyledTableHeader } from './style';

export const TableHeader: FC<TableHeaderProps> = ({ children, columns }) => {
  return (
    <StyledTableHeader>
      <TableRow>
        {columns.map((column, index) => (
          <TableCell key={index} size={column.width}>
            {column.title}
          </TableCell>
        ))}
      </TableRow>
      {children}
    </StyledTableHeader>
  );
};
