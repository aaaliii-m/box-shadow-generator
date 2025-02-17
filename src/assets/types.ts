export interface ColorContextType {
  colors: Record<string, string | number | boolean>;
  setColor: (key: string, value: string) => void;
}


export type shadowProperties = {
  background: string,
  box: string,
  shadow: string,
  horizontal: string,
  vertical: string,
  blur: string,
  spread: string,
  opacity: string,
  inset: boolean
}


export interface ShadowContextType {
  contextError?: string;
  shadowProperties: shadowProperties;
  setShadowProperty: (key: string, value: string | number | boolean) => void;
}