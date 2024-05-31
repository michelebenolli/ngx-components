import { EditorConfig } from "./editor-config";
export interface PickerConfig<T = any> {
    editor: EditorConfig;
    name: (x: T) => string;
    description?: (x: T) => string | undefined;
    multiple?: boolean;
}
