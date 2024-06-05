export interface Column {
  dataIndex: string;
  width: number;
  title: string;
  renderSelect?: boolean;
  selectOptions?: SelectOption[];
  onSelectChange?: (value: string, record: Record) => void;
}

export interface Record {
  [key: string]: any;
}

export interface SelectOption {
  label: string;
  value: string;
}

export interface TableBodyProps {
  data: Record[];
  columns: Column[];
  loading: boolean;
  onClick?: (record: Record) => void;
  renderAction?: (record: Record) => React.ReactNode;
  noDataMessage?: string;
}
