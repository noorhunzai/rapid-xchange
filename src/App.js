import "./App.css";
import Routers from "./routers";
import "typeface-roboto";
import { MyContextProvider } from "./context/context";

function App() {
  return (
    <>
      <div className="App" style={{ fontFamily: "Roboto, sans-serif" }}>
        <MyContextProvider>
          <Routers />
        </MyContextProvider>
      </div>
    </>
  );
}

export default App;
