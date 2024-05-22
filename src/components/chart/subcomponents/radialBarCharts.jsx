"use client"
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const RadialBarChart = ({assigned, pending, completed, approved, rejected, live}) => {
    const data = {
        datasets: [
            {
                label: "Assigned",
                value: "Assigned",
                data: [assigned, 100-assigned],
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
                label: "Pending",
                value: "Pending",
                data: [pending, 100-pending],
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
                label: "Completed",
                value: "Completed",
                data: [completed, 100-completed],
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
                label: "Approved",
                value: "Approved",
                data: [approved, 100-approved],
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
                label: "Rejected",
                value: "Rejected",
                data: [rejected, 100-rejected],
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
                label: "Live",
                value: "Live",
                data: [live, 100-live],
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
            animateRotate: true,
        },
        cutoutPercentage: 60,
    };

    return <Doughnut data={data} options={options} />;
};

export default RadialBarChart;
