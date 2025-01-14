import { createContext, useContext } from "react";
import { ColorContextType } from "../assets/types";

export const colorContext = createContext<ColorContextType | undefined>(undefined);

export const useColorContext = (): ColorContextType => {
  const context = useContext(colorContext);
  if (!context) {
    throw new Error("useColorContext must be used within a ColorProvider");
  }
  return context;
};
