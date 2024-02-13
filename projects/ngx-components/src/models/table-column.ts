import { DataType } from './data-type';

export interface TableColumn<T> {
  name: string;
  value: (x: T) => any;
  type?: DataType;
  sort?: string; // TODO: List of strings...
  // TODO: Remove position?: 'right' | 'left';
  template?: string;
}
