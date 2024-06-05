import { FC } from 'react';
import { TableBodyProps } from '~/@types/components/Table/table-body-props';
import { TableCell } from '../Table-Cell/table-cell';
import { TableRow } from '../Table-Row/table-row';
import { SelectorColumn } from './Selector-Column/selector-column';
import { StyledTableBody } from './style';

export const TableBody: FC<TableBodyProps> = ({ data, columns, loading, onClick, renderAction, noDataMessage }) => {
  return (
    <StyledTableBody>
      {loading ? (
        <TableRow>
          <TableCell colSpan={columns.length}>Carregando...</TableCell>
        </TableRow>
      ) : data.length === 0 ? (
        <TableRow>
          <TableCell colSpan={columns.length}>{noDataMessage || 'Nenhum dado disponível'}</TableCell>
        </TableRow>
      ) : (
        // Render the table data
        data.map((record, index) => (
          <TableRow key={index} onClick={() => onClick && onClick(record)}>
            {columns.map((column, colIndex) => (
              <TableCell key={colIndex} size={column.width}>
                {column.renderSelect ? (
                  //// Render the selector (SelectorColumn) if the column has the renderSelect property
                  <SelectorColumn column={column} record={record} />
                ) : column.dataIndex === '' ? (
                  renderAction && renderAction(record)
                ) : (
                  // Render cell value based on dataIndex
                  record[column.dataIndex]
                )}
              </TableCell>
            ))}
          </TableRow>
        ))
      )}
    </StyledTableBody>
  );
};
