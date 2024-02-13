export interface Action<T = any> {
  name: string;
  icon?: string;
  action?: (x?: any) => any;
  //action?(x?: T): void; // TODO: Test
  //action?: (x?: T) => any;
  show?: (x?: T) => boolean;
  items?: Action<T>[]; 
}
