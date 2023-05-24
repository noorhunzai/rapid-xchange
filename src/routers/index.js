import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConverterPage from "../pages/converterPage";
import ExchangePage from "../pages/exchangePage";
import Header from "../components/header";

export const Routers = () => {
  return (
    <>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<ConverterPage />} />
            <Route path="/exchange" element={<ExchangePage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};
export default Routers;
