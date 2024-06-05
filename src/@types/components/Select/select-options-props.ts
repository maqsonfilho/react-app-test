import { ReactNode } from 'react';

export interface SelectOptionsProps {
  value: string;
  onSelect: (value: string) => void | null;
  children?: ReactNode;
}
