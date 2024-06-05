import { ReactNode } from 'react';
import { Column } from '~/@types/components/Table/table-body-props';

export interface TableHeaderProps {
  columns: Column[];
  children?: ReactNode;
}
