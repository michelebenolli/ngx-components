export interface EditorConfig {
  title: string;
  subtitle?: string;
  size?: 'small' | 'medium' | 'large';
  //id?: number; // TODO: Remove
  data?: any;
  activeTab?: string;
}
