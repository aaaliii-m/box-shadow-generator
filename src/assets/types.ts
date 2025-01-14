export interface ColorContextType {
  colors: Record<string, string>;
  setColor: (key: string, value: string) => void;
}