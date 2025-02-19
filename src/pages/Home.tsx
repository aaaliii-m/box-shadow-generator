import { BoxShadowColors } from "../components/BoxShadowColors";
import { BoxShadowSlider } from "../components/BoxShadowSlider";
import { BoxView } from "../components/BoxView";
import { useShadowGeneratorContext } from "../context/shadowGeneratorContext";

export const Home = () => {
  const context = useShadowGeneratorContext();

  // Handlers

  const handleChangeCheckbox = (isChecked: boolean): void => {
    if (isChecked) {
      context.setShadowProperty('inset', 'inset')
    } else context.setShadowProperty('inset', '');
  }

  return (
    <>
      <div className="container mx-auto pb-8">
        <div className="font-firaCode">
          <header className="px-4 sm:px-0 py-4">
            <h1 className="font-bold leading-5 text-xl text-gray-900">
              CSS Box <br />
              Shadow <br />
              Generator
            </h1>
          </header>
          <div className="sm:border sm:border-gray-400 rounded-xl sm:p-4 lg:p-8">
            <div className="flex gap-4 xl:gap-8 lg:mb-8 flex-wrap lg:flex-nowrap justify-center lg:justify-between">
              {/* controls */}
              <div className="bg-gray-200 p-4 xl:p-8 rounded-xl shadow-sm w-full lg:w-auto">
                <div className="flex gap-4 sm:gap-16 justify-center flex-wrap sm:flex-nowrap border border-gray-400 sm:border-none rounded-lg p-4 sm:p-0">
                  {/* sliders */}
                  <div className="w-full sm:w-auto">
                    <BoxShadowSlider label="horizontal length" type="horizontal" />
                    <BoxShadowSlider label="Vertical length" type="vertical" />
                    <BoxShadowSlider label="blur radius" type="blur" />
                    <BoxShadowSlider label="spread radius" type="spread" />
                  </div>
                  {/* colors */}
                  <div className="flex justify-between flex-col w-full sm:w-auto">
                    <BoxShadowColors color="shadow" colorKey="#000000" />
                    <BoxShadowColors color="background" colorKey="#ffffff" />
                    <BoxShadowColors color="box" colorKey="#f3a712" />
                    <BoxShadowSlider label="opacity" type="opacity" />
                    {/* inset toggle switch */}
                    <div className="mb-2 sm:mb-0 mt-4 sm:mt-2 flex gap-2 justify-center items-center">
                      <span className="capitalize text-xs">outline</span>
                      <label className="relative inline-block w-12 h-6 cursor-pointer">
                        <input type="checkbox" className="peer sr-only" onChange={e => { handleChangeCheckbox(e.target.checked) }} />
                        <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-[#6420aa]"></span>
                        <span className="absolute bottom-[0.15rem] left-1 h-5 w-5 bg-white rounded-full transition-transform transform peer-checked:translate-x-[1.35rem]"></span>
                      </label>
                      <span className="capitalize text-xs">inset</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* view */}
              <BoxView background="#FBF8EF" boxBg="#f3A712" boxShadowColor="#000000" />
            </div>
            {/* code */}
            <div className="bg-slate-700 rounded-xl shadow-sm px-4 py-8 text-gray-200 mx-4 sm:mx-0 mt-4 lg:mt-0 overflow-scroll sm:overflow-hidden">
              <pre><code className="pe-8 sm:pe-0 cursor-text">box-shadow: {context.shadowProperties.horizontal}px {context.shadowProperties.vertical}px {context.shadowProperties.blur}px {context.shadowProperties.spread}px {context.shadowProperties.shadow} {context.shadowProperties.inset}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
