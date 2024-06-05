export interface CustomSnackbarProps {
  open?: boolean;
  message?: string | null;
  severity?: 'error' | 'warning' | 'info' | 'success';
  onClose?: (event?: React.SyntheticEvent | Event, reason?: string) => void;
}
