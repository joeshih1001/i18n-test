import { useEffect, useState } from "react";
// import { useAppSelector } from "../../store/hook";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { generateDateTimeToDay } from "../../utils/DateTimeFormat";
import ChartDataJson from "../../assets/copywriting/ChartData.json";
Chart.register(...registerables);

export const MyChart = () => {
  // const { chartData } = useAppSelector((state) => state.crypto);
  const [labels, setLabels] = useState<string[]>([""]);
  const [data, setData] = useState<number[]>([0]);
  useEffect(() => {
    const labelsData = ChartDataJson.map((d) => {
      return generateDateTimeToDay(d.timestamp);
    });
    const newData = ChartDataJson.map((d) => {
      return Number(d.close);
    });
    setLabels(labelsData.reverse());
    setData(newData.reverse());
  }, []);
  const roundTo = function (Num: string | number, decimal: number) {
    const num = typeof Num === "string" ? parseFloat(Num) : Num;
    return (
      Math.round((num + Number.EPSILON) * Math.pow(10, decimal)) /
      Math.pow(10, decimal)
    );
  };

  const lineChartData = {
    labels: labels,
    datasets: [
      {
        label: "Coin Price",
        fill: true,
        backgroundColor: ({
          chart: { ctx },
        }: {
          chart: { ctx: CanvasRenderingContext2D };
        }) => {
          const bg = ctx.createLinearGradient(0, 450, 0, 0);
          bg.addColorStop(0, "rgba(32, 29,227, 0)");
          bg.addColorStop(0.1, "rgba(45, 42, 228, 0.1)");
          bg.addColorStop(1, "rgba(227, 61, 236, 0.1)");
          return bg;
        },
        borderColor: "#d9adad",
        pointBackgroundColor: "#DBAA76",
        pointBorderColor: "#fff8ec75",
        pointBorderWidth: 3,
        pointHoverBackgroundColor: "#DBAA76",
        pointHoverBorderColor: "#fff8ec75",
        pointHoverBorderWidth: 5,
        borderWidth: 3,
        tension: 0.3, //控制曲線曲度
        data: data,
      },
    ],
  };
  const chartOption = {
    plugins: {
      tooltip: {
        displayColors: false, //將lable title前方形圖拿掉
        backgroundColor: "rgba(137, 128, 128, 0.689)",
        borderColor: "rgba(255, 255, 255, 0.2)",
        borderWidth: 1,
        titleFontColor: "#D8D8E5",
        bodyColor: "#ffffff",
        bodyFontSize: "100",
        padding: 10,
        caretSize: 5,
        caretPadding: 5,
        bodyFont: {
          size: 15,
        },
      },
      legend: {
        display: false, //關閉dataset label
      },
    },

    scales: {
      x: {
        grid: {
          color: "#11103235",
        },
      },
      y: {
        ticks: {
          // 使用回調函數來自定義標籤的顯示方式
          callback: function (value: string | number) {
            // 在每個標籤前加上 "$"
            return "$ " + roundTo(value, 2);
          },
        },
        grid: {
          color: "#11103235",
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "index" as const,
    },
  };

  return (
    <>
      {/*chart.js 的bug 必須放另一個canvas 才能resize from mobile to desktop*/}
      <canvas className="h-[10px]" />
      <Line id="chart" data={lineChartData} options={chartOption} />
    </>
  );
};
