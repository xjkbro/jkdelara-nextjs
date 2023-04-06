import { useState, useRef } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

export default function LineChart({ data, label }) {
    const ref = useRef();
    // console.log(data)
    const [chartData, setChartData] = useState({
        labels: data.map((x) => x.date),
        datasets: [
            {
                label: label,
                data: data.map((x) => x.value),
                backgroundColor: ["#EA591F"],
                borderColor: "#EA591F",
                borderWidth: 2,
            },
        ],
    });
    console.log(chartData);
    return (
        <div className="chart-container">
            <Line
                ref={ref}
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: label + " over the past 30 days",
                        },
                        legend: {
                            display: false,
                        },
                    },
                    // maintainAspectRatio : false
                }}
            />
        </div>
    );
}
