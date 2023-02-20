
import { useState, useRef  } from "react";
import { Line } from "react-chartjs-2";
import 'chart.js/auto';

export default function LineChart({ data , label }) {
    const ref = useRef();
    // console.log(data)
    const [chartData, setChartData] = useState({
        labels: data.map((x) => x.date), 
        datasets: [
        {
            label: "User " + label,
            data: data.map((x) => x.value),
            backgroundColor: ["#ffffff"],
            borderColor: "black",
            borderWidth: 2
        }
        ]
    });
    console.log(chartData)
    return (
        <div className="chart-container">
            <Line
                ref={ref}
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: label
                        },
                        legend: {
                            display: false
                        }
                    },
                    maintainAspectRatio : false

                }}
            />
        </div>
    );
}