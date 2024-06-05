import { Column } from './table-body-props';

export interface TableProps {
  data: any[];
  columns: Column[];
  loading?: boolean;
  onClick?: (record: any) => void;
  title?: string;
  size?: number;
  renderAction?: any;
  noDataMessage?: string;
}
