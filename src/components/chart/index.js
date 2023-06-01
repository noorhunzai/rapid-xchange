import { useContext, useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { MyContext } from "../../context/context";
import { useParams } from "react-router-dom";
import "./style.css";


const ChartComponent = () => {
  const [chartData, setChartData] = useState(null);
  const { url } = useContext(MyContext);
  const { currency } = useParams();
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        const rates = data.rates;

        const chartLabels = Object.keys(rates);
        const chartData = Object.values(rates).map((rate) => rate[currency]);

        setChartData({
          labels: chartLabels,
          datasets: [
            {
              label: "Exchange Rate",
              data: chartData,
              borderColor: "#36a2eb",
              tension: 0.4,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currency, url]);

  useEffect(() => {
    if (chartData) {
      const ctx = chartRef.current.getContext("2d");
      chartRef.current = new Chart(ctx, {
        type: "line",
        data: chartData,
        options: {
          responsive: true,
          scales: {
            x: {
              title: {
                display: true,
                text: "Date",
              },
            },
            y: {
              title: {
                display: true,
                text: "Exchange Rate",
              },
            },
          },
        },
      });
    }
  }, [chartData]);

  return (
    <div className="chart-container">
      <div className="chart-wrapper">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default ChartComponent;
