import { EditorConfig } from "./editor-config";

export interface PickerConfig<T = any> { // TODO: Keep T?
  //service: any; // TODO: Do not inject services, pass data from outside
  editor: EditorConfig;
  //id: (x: T) => any; // TODO: Keep it?
  name: (x: T) => string;
  description?: (x: T) => string | undefined;
  // TODO Add filters?: Filter[];
  multiple?: boolean;
}