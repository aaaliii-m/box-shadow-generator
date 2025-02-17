import { shadowProperties } from "../assets/types";
import { useShadowGeneratorContext } from "../context/shadowGeneratorContext";

export const BoxShadowSlider = (props: { label: string, type: keyof Exclude<shadowProperties, 'inset'> }) => {
  const context = useShadowGeneratorContext();

  return (
    <>
      <div>
        <div className="flex gap-4 items-center justify-between mt-2">
          <label className="font-light text-xs capitalize">
            {props.label}:
          </label>
          <input
            className="rounded-lg px-4 py-3 text-right input-no-spinner text-xs w-[75px] focus:outline-none"
            type="number"
            max="100"
            value={context.shadowProperties[props.type] as string}
            onChange={(e) => {
              context.setShadowProperty(props.type, e.target.value);
            }}
          /><span className="text-xs ml-[-12px]">px</span>
        </div>
        <div className="mt-4">
          <input
            className="custom-slider"
            type="range"
            max="100"
            min={props.type === 'opacity' ? "0" : "-100"}
            value={context.shadowProperties[props.type] as string}
            onChange={(e) => {
              context.setShadowProperty(props.type, e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};
