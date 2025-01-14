import { useState } from "react";
import { ColorContextType } from "../assets/types";
import { colorContext } from "../context/colorContext";

export const ColorContextProviver = ({ children }: { children: React.ReactNode }): React.ReactNode => {
    const [colors, setColors] = useState<Record<string, string>>({
        background: "#fff",
        box: "#f3a712",
        shadow: "#000000",
    });

    const setColor: ColorContextType["setColor"] = (key, value) => {
        setColors((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    return (
        <colorContext.Provider value={{ colors, setColor }}>
            {children}
        </colorContext.Provider>
    );
};