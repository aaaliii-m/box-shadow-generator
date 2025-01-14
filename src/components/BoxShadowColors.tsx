import { useColorContext } from "../context/colorContext";

export const BoxShadowColors = (props: { color: string, colorKey: string }) => {
  const context = useColorContext();

  return (
    <>
      <div>
        <div className="flex gap-4 items-center justify-between mt-2 relative">
          <label className="font-light text-xs capitalize">
            {props.color}
          </label>
          <input
            className="focus:outline-none border-0 cursor-pointer rounded w-5 h-5 absolute right-[64px]"
            type="color"
            onChange={(e) => {
              context.setColor(props.color, e.target.value);
            }}
            value={context.colors[props.color]}
          />
          <input
            className="rounded px-2 py-[6px] text-right input-no-spinner text-xs w-[90px] focus:outline-none"
            type="text"
            value={context.colors[props.color]}
            onChange={(e) => {
              context.setColor(props.color, e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};
