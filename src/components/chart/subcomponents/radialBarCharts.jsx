"use client"
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const RadialBarChart = () => {
    const data = {
        datasets: [
            {
                data: [88, 12],
                backgroundColor: ['#208DE7', '#E9ECEF'],
                borderColor: ['#208DE7', '#E9ECEF'],
                borderWidth: 0,
                circumference: 360,
                rotation: 0,
                cutout: '90%',
                borderRadius: 50,
                weight: 15,
            },
            {
                data: [88, 12],
                backgroundColor: ['#F6CF00', '#E9ECEF'],
                borderColor: ['#F6CF00', '#E9ECEF'],
                borderWidth: 0,
                circumference: 360,
                rotation: 0,
                cutout: '70%',
                borderRadius: 50,
                weight: 5,
            },
            {
                data: [52, 48],
                backgroundColor: ['#5DB2F5', '#E9ECEF'],
                borderColor: ['#5DB2F5', '#E9ECEF'],
                borderWidth: 0,
                circumference: 360,
                rotation: 0,
                cutout: '50%',
                borderRadius: 50,
                weight: 3,
            },
            {
                data: [88, 12],
                backgroundColor: ['#1AA628', '#E9ECEF'],
                borderColor: ['#1AA628', '#E9ECEF'],
                borderWidth: 0,
                circumference: 360,
                rotation: 0,
                cutout: '35%',
                borderRadius: 50,
                weight: 2.25,
            },
            {
                data: [55, 45],
                backgroundColor: ['#FF4F4F', '#E9ECEF'],
                borderColor: ['#FF4F4F', '#E9ECEF'],
                borderWidth: 0,
                circumference: 360,
                rotation: 0,
                cutout: '20%',
                borderRadius: 50,
                weight: 1.6,
            },
            {
                data: [50, 50],
                backgroundColor: ['#C5002F', '#E9ECEF'],
                borderColor: ['#C5002F', '#E9ECEF'],
                borderWidth: 0,
                circumference: 360,
                rotation: 0,
                cutout: '10%',
                borderRadius: 50,
                weight: 1.25,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        animation: {
            animateRotate: false,
        },
        cutoutPercentage: 60,
    };

    return <Doughnut data={data} options={options} />;
};

export default RadialBarChart;
