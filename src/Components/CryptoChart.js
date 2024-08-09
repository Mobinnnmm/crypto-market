// Components/CryptoChart.js
import { Line } from 'react-chartjs-2';

const CryptoChart = ({ data }) => {
  const chartData = {
    labels: data.map((point) => new Date(point.time).toLocaleDateString()),
    datasets: [
      {
        label: 'Price (USD)',
        data: data.map((point) => point.price),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default CryptoChart;
