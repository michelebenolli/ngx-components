import { DataType } from './data-type';

export interface TableColumn {
  name: string;
  value: (x: any) => any;
  type?: DataType;
  sort?: string;
  position?: 'right' | 'left';
  template?: string;
}
