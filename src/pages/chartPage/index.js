import { useContext } from "react";
import ChartComponent from "../../components/chart";
import { MyContext } from "../../context/context";

const ChartPage = () => {
  const { baseCurrency, toCurrency } = useContext(MyContext);

  return (
    <>
      <h2>
        Historical Chart for {baseCurrency} vs {toCurrency}
      </h2>
      <ChartComponent />
    </>
  );
};
export default ChartPage;
