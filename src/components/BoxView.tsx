import { useEffect, useState } from "react";
import { useShadowGeneratorContext } from "../context/shadowGeneratorContext";
import { hexConverter } from "../utils/hexConverter";
import { ShadowContextType } from "../assets/types";

export const BoxView = (props: { background: string, boxBg: string, boxShadowColor: string }): React.ReactNode => {

  const context: ShadowContextType = useShadowGeneratorContext();
  const [hexNumber, setHexNumber] = useState<string>('ff');

  // Side Effects
  useEffect(() => {
    setHexNumber(() => hexConverter(context.shadowProperties.opacity));
  }, [context.shadowProperties.opacity]);

  return (
    <>
      <div
        className={`rounded-xl shadow-sm w-full h-[450px] sm:h-[600px] lg:h-auto mx-4 sm:mx-0`}
        style={{ backgroundColor: context.shadowProperties.background || props.background }}
      >
        <div className="flex justify-center items-center h-full">
          <div
            className={`sm:w-[100px] sm:h-[100px] w-[50px] h-[50px]`}
            style={{
              backgroundColor: context.shadowProperties.box || props.boxBg,
              boxShadow: `${context.shadowProperties.horizontal}px ${context.shadowProperties.vertical}px ${context.shadowProperties.blur}px ${context.shadowProperties.spread}px ${context.shadowProperties.shadow}${hexNumber} ${context.shadowProperties.inset === 'inset' ? 'inset' : ''}`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
};
