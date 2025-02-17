import { ShadowGeneratorContextProvider } from "./components/ShadowGeneratorContextProvider";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <>
      <ShadowGeneratorContextProvider>
        <div className="bg-[#e8edee] h-screen">
          <Home />
        </div>
      </ShadowGeneratorContextProvider>
    </>
  );
};

export default App;
