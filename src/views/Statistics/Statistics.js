import React from "react";
import { useLoaderData } from "react-router-dom";
import { Chart as Charts } from "chart.js/auto";
import { Radar } from "react-chartjs-2";

const Statistics = () => {
  const { data } = useLoaderData();

  console.log(data?.data);

  const labels = [
    "0",
    "10",
    "20",
    "30",
    "40",
    "50",
    "60",
    "70",
    "80",
    "90",
    "100",
  ];

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Chart info for showing totals",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: data?.data?.map((item) => item.total),
      },
    ],
  };

  return <Radar data={chartData} />;
};

export default Statistics;
