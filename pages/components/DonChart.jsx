import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const DonChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // Ref to store the chart instance
  

  useEffect(() => {
    const createChart = () => {
      const ctx = chartRef.current.getContext('2d');

      const data =  {
        labels: ['Angel Investor', 'VC Fund', 'Family Office', 'Syndicate', 'Other'],
        datasets: [
          {
            label: 'Investors Presence',
            data: [48, 22, 11, 12, 7], // These numbers should match the percentages from your data
            backgroundColor: [
              '#CBB2FF',
              '#C2DAFF ',
              '#ECD6FD ',
              '#C8F0FF',
              '#C5FAE1'
            ],
            borderWidth: -2
          },
        ],
      };

      const textPlugin = {
        id: 'textPlugin',
        afterDatasetsDraw(chart, args, options) {
          const { ctx, data } = chart;
          ctx.save();
          data.datasets.forEach((dataset, datasetIndex) => {
            chart.getDatasetMeta(datasetIndex).data.forEach((element, index) => {
              const { x, y, innerRadius, outerRadius, startAngle, endAngle } = element;
              const middleAngle = startAngle + (endAngle - startAngle) / 2;
              const textX = x + (outerRadius + innerRadius) / 2 * Math.cos(middleAngle);
              const textY = y + (outerRadius + innerRadius) / 2 * Math.sin(middleAngle);
              const value = dataset.data[index] + '%';

              ctx.fillStyle = 'black'; // Text color
              ctx.font = '16px Arial'; // Text font
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillText(value, textX, textY);
            });
          });
          ctx.restore();
        }
      };

      chartInstance.current = new Chart(ctx, {
        type: 'doughnut',
        data : data,
        options: {
          cutoutPercentage: 50, // Adjust the thickness of the donut here
          cutout: '85%',
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
            },
          },
        },
        plugins: [textPlugin],
      });
    };

    if (chartRef && chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destroy any existing chart instance before creating a new one
      }
      createChart();
    }

    // Clean up on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destroy the chart instance to prevent memory leaks
      }
    };
  }, []); // Empty dependency array ensures this effect runs once on mount and once on unmount

  return (
    <canvas ref={chartRef} />
  );
};

export default DonChart;
