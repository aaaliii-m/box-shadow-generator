import { useState } from "react"
import { ShadowContextType } from "../assets/types";
import { shadowGeneratorContext } from "../context/shadowGeneratorContext";

export const ShadowGeneratorContextProvider = ({ children }: { children: React.ReactNode }): React.ReactNode => {
    const [shadowProperties, setShadowProperties] = useState<ShadowContextType['shadowProperties']>({
        background: "#ffffff",
        box: "#f3a712",
        shadow: "#000000",
        horizontal: '0',
        vertical: '0',
        blur: '0',
        spread: '0',
        opacity: '100',
        inset: '',
    });

    const setShadowProperty: ShadowContextType['setShadowProperty'] = (key: string, value: string | number | boolean) => {
        setShadowProperties(prev => {
            return ({
                ...prev,
                [key]: value,
            })
        })
    }

    return (
        <shadowGeneratorContext.Provider value={{ shadowProperties, setShadowProperty }}>
            {children}
        </shadowGeneratorContext.Provider>
    )

}



/* 

================= NOTE =================

spread is optional


*/