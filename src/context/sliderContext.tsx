import { createContext, useContext } from "react";

export const sliderContext = createContext(undefined);

export const useSliderContext = () => {
    const context = useContext(sliderContext);
    if (!context) {
        throw new Error("useSliderContext must be used inside SliderContextProvider");
    }
    return context;
}