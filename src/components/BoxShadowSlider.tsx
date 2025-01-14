import { useState } from "react";

export const BoxShadowSlider = (props: any) => {
  const [value, setValue] = useState<number>(0);

  return (
    <>
      <div>
        <div className="flex gap-4 items-center justify-between mt-2">
          <label className="font-light text-xs capitalize">
            {props.label}:
          </label>
          <input
            className="rounded-lg px-4 py-3 text-right input-no-spinner text-xs w-[75px] focus:outline-none"
            type="text"
            min="0"
            max="100"
            value={`${value} px`}
            onChange={(e) => setValue(parseInt(e.target.value) || 0)}
          />
        </div>
        <div className="mt-4">
          <input
            className="custom-slider"
            type="range"
            max="100"
            min="0"
            value={value}
            onChange={(e) => setValue(parseInt(e.target.value))}
          />
        </div>
      </div>
    </>
  );
};
