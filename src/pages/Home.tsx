import { BoxShadowColors } from "../components/BoxShadowColors";
import { BoxShadowSlider } from "../components/BoxShadowSlider";
import { BoxView } from "../components/BoxView";
import { useShadowGeneratorContext } from "../context/shadowGeneratorContext";

export const Home = () => {
  const context = useShadowGeneratorContext();
  return (
    <>
      <div className="container mx-auto mb-8">
        <div className="font-firaCode">
          <header className="p-4">
            <h1 className="font-bold leading-5 text-xl text-gray-900">
              CSS Box <br />
              Shadow <br />
              Generator
            </h1>
          </header>
          <div className="flex gap-8">
            {/* controls */}
            <div className="bg-gray-200 p-8 rounded-xl shadow-sm">
              <div className="flex gap-16">
                {/* sliders */}
                <div>
                  <BoxShadowSlider label="horizontal length" type="horizontal" />
                  <BoxShadowSlider label="Vertical length" type="vertical" />
                  <BoxShadowSlider label="blur radius" type="blur" />
                  <BoxShadowSlider label="spread radius" type="spread" />
                </div>
                {/* colors */}
                <div className="flex justify-between flex-col">
                  <BoxShadowColors color="shadow" colorKey="#000000" />
                  <BoxShadowColors color="background" colorKey="#ffffff" />
                  <BoxShadowColors color="box" colorKey="#f3a712" />
                  <BoxShadowSlider label="opacity" type="opacity" />
                  {/* toggle switch */}
                  <div className="mt-2 flex gap-2 justify-center items-center">
                    <span className="capitalize text-xs">outline</span>
                    <label className="relative inline-block w-12 h-6 cursor-pointer">
                      <input type="checkbox" className="peer sr-only" />
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
            {/* code */}
            <div className="h-vh bg-slate-600 basis-4/12 rounded-xl shadow-sm">
              <pre><code>box-shadow: {context.shadowProperties.horizontal}px {context.shadowProperties.vertical}px {context.shadowProperties.blur}px {context.shadowProperties.spread}px {context.shadowProperties.shadow}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
