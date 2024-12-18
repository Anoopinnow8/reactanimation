import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
);

const BarGraph = () => {
  // Generate random sales data for each day of the month
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1); // Days 1-31
  const salesData = daysInMonth.map(() => Math.floor(Math.random() * 500) + 50); // Random sales between 50-500

  const data = {
    labels: daysInMonth.map((day) => `Day ${day}`), // Label each bar as "Day X"
    datasets: [
      {
        label: 'Daily Sales',
        data: salesData,
        backgroundColor: 'rgba(54, 162, 235, 0.7)', // Blue bars
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true, // Makes the chart responsive
    maintainAspectRatio: false, // Controls aspect ratio
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // No grid lines on x-axis
        },
      },
      y: {
        beginAtZero: true, // Ensure the y-axis starts at zero
        grid: {
          display: true,
        },
        ticks: {
          stepSize: 100, // Optional: Adjust tick intervals
        },
      },
    },
  };
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarGraph;
