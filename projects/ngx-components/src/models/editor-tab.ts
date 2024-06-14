export interface EditorTab {
    id: string;
    label: string; // TODO: Nullable
    icon: string; // TODO: Nullable
    disabled?: boolean;
    visible?: boolean;
    action?: (x: any) => any; // TODO: Handle
}
