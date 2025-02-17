import { createContext, useContext } from "react";
import { ShadowContextType } from "../assets/types";

export const shadowGeneratorContext = createContext<ShadowContextType | null>(null);

export const useShadowGeneratorContext = (): ShadowContextType => {
    const context = useContext(shadowGeneratorContext);
    if (!context) {
        throw new Error("useShadowGeneratorContext must be used inside shadowGeneratorContext Provider");
    }
    return context;
}