import { shadowProperties } from "../assets/types";
import { useShadowGeneratorContext } from "../context/shadowGeneratorContext";

export const BoxShadowSlider = (props: { label: string, type: keyof Exclude<shadowProperties, 'inset'> }) => {
  const context = useShadowGeneratorContext();

  return (
    <>
      <div>
        <div className="flex gap-3 items-center justify-between mt-2 flow-wrap">
          <div>
            <label className="font-light text-xs capitalize">
              {props.label}:
            </label>
          </div>
          <div>
            <input
              className="rounded-lg px-2 sm:px-4 py-[6px] sm:py-3 text-right input-no-spinner text-xs w-[72px] sm:w-[60px] focus:outline-none"
              type="number"
              max="100"
              value={context.shadowProperties[props.type] as string}
              onChange={(e) => {
                context.setShadowProperty(props.type, e.target.value);
              }}
            /><span className="text-xs ml-1">px</span>
          </div>
        </div>
        <div className="mt-4">
          <input
            className="custom-slider"
            type="range"
            max={props.type === 'spread' ? "50" : "100"}
            min={props.type === 'opacity' ? "0" : props.type === 'spread' ? "-50" : "-100"}
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
