import React, { useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";
import { historyOptions } from "../chartConfigs/chartConfig";

const HistoryChart = ({ data }) => {
  const chartRef = useRef();
  const { day, week, year, detail } = data;
  const [timeFormat, setTimeFormat] = useState("24h");

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  const determineTimeFormat = () => {
    switch (timeFormat) {
      case "24h":
        return day;
      case "7d":
        return week;
      case "1y":
        return year;
      default:
        return day;
    }
  };
  useEffect(() => {
    if (chartRef && chartRef.current && detail) {
      const chartInstance = new Chartjs(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: `${detail.name} Price`,
              data: determineTimeFormat(),
              backgroundColor: ["rgba(54, 162, 235, 0.2)"],
              borderWidth: 1,
              borderColor: "rgba(54, 162, 235, 1)",
              pointRadius: 0,
            },
          ],
        },
        options: {
          ...historyOptions,
        },
      });
    }
  }, [chartRef, timeFormat, detail, determineTimeFormat]);

  const renderPrice = () => {
    if (detail) {
      return (
        <div className="text-center">
          <p className="my-0">
            Current Price: {numberWithCommas(detail.current_price.toFixed(2))}
          </p>
          <p
            className={
              detail.price_change_percentage_24h < 0
                ? "text-danger my-0"
                : "text-success my-0"
            }
          >
            24H (%):{" " + detail.price_change_percentage_24h.toFixed(2)}%
          </p>
        </div>
      );
    }
  };

  return (
    <div className="bg-white border mt-2 rounded p-3">
      <div>{renderPrice()}</div>
      <div>
        <canvas ref={chartRef} id="myChart" width="250" height="250"></canvas>
      </div>
      <div className="chart-button mt-1">
        <button
          onClick={() => setTimeFormat("24h")}
          className="btn-outline-secondary btn-sm"
        >
          Day
        </button>
        <button
          onClick={() => setTimeFormat("7d")}
          className="btn-outline-secondary btn-sm"
        >
          Week
        </button>
        <button
          onClick={() => setTimeFormat("1y")}
          className="btn-outline-secondary btn-sm"
        >
          Year
        </button>
      </div>
    </div>
  );
};

export default HistoryChart;
