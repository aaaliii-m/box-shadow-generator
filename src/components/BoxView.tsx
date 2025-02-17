import { useShadowGeneratorContext } from "../context/shadowGeneratorContext";

export const BoxView = (props: { background: string, boxBg: string, boxShadowColor: string }): React.ReactNode => {

  const context = useShadowGeneratorContext();

  return (
    <>
      <div
        className={`h-vh basis-2/5 rounded-xl shadow-sm`}
        style={{ backgroundColor: context.shadowProperties.background || props.background }}
      >
        <div className="flex justify-center items-center h-full">
          <div
            className={`w-[150px] h-[150px]`}
            style={{
              backgroundColor: context.shadowProperties.box || props.boxBg,
              boxShadow: `${context.shadowProperties.horizontal}px ${context.shadowProperties.vertical}px ${context.shadowProperties.blur}px ${context.shadowProperties.spread}px ${context.shadowProperties.shadow}`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
};
