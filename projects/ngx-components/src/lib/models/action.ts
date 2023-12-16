export interface Action<T = any> {
  name: string;
  icon?: string;
  action?: (x?: T) => any;
  show?: (x?: T) => boolean;
  items?: Action<T>[]; 
}
