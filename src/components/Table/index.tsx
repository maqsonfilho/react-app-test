import { FC } from 'react';
import { TableProps } from '~/@types/components/Table/table-props';
import { TableBody } from './Table-Body/table-body';
import { TableCustom } from './Table-Custom/table-custom';
import { TableHeader } from './Table-Header/table-header';
import { StyledTableContainer, TitleTable } from './style';

export const Table: FC<TableProps> = ({ data, columns, onClick, title, renderAction, noDataMessage }) => {
  return (
    <StyledTableContainer>
      <TitleTable>{title}</TitleTable>
      <TableCustom>
        <TableHeader columns={columns} />
        <TableBody
          data={data}
          columns={columns}
          loading={false}
          onClick={onClick}
          renderAction={renderAction}
          noDataMessage={noDataMessage}
        />
      </TableCustom>
    </StyledTableContainer>
  );
};
