import { useColorContext } from "../context/colorContext";

export const BoxView = (props: { background: string, boxBg: string, boxShadowColor: string }): React.ReactNode => {

  const context = useColorContext();

  return (
    <>
      <div
        className={`h-vh basis-2/5 rounded-xl shadow-sm`}
        style={{ backgroundColor: context.colors.background || props.background }}
      >
        <div className="flex justify-center items-center h-full">
          <div
            className={`w-[150px] h-[150px]`}
            style={{
              backgroundColor: context.colors.box || props.boxBg,
              boxShadow: `1px 1px 1px 1px ${context.colors.shadow}`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
};
