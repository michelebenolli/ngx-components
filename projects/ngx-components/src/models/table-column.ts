export interface TableColumn {
  name: string;
  value: (x: any) => any;
  sort?: string;
  position?: 'right' | 'left';
  template?: string;
}
