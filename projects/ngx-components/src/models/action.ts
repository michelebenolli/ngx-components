import { Confirmation } from "primeng/api";

export interface Action {
  name?: string;
  icon?: string;
  action?: (x?: any) => any;
  //dialog?: Type<any>; // TODO: Needed? Call it 'confirm'? Use a fixed component? Give to it a template to customize?
  confirm?: Confirmation,
  show?: (x?: any) => boolean;
  permissions?: string | string[];
  items?: Action[]; 
}
