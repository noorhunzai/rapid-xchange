import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import ConverterPage from "../pages/converterPage";
import ExchangePage from "../pages/exchangePage";
import Header from "../components/header";
import ChartComponent from "../pages/chartPage";
import Footer from "../components/footer/index";

export const Routers = () => {
  return (
    <>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<ConverterPage />} />
            <Route path="/exchange" element={<ExchangePage />} />
            <Route path="/chart/:currency" element={<ChartComponent />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
};
export default Routers;
