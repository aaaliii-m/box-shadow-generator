import { ColorContextProviver } from "./components/ColorContextProvider";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <>
      <ColorContextProviver>
        <div className="bg-[#e8edee] h-screen">
          <Home />
        </div>
      </ColorContextProviver>
    </>
  );
};

export default App;
