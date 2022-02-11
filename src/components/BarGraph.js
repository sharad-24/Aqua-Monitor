import React from 'react';
import { withRouter } from "react-router-dom";

import { Bar } from 'react-chartjs-2';
import {Chart, CategoryScale, BarController, BarElement, PointElement, LinearScale, Title} from 'chart.js'
Chart.register(CategoryScale, BarController, BarElement, PointElement, LinearScale, Title);

let forBarGraph = [];  
forBarGraph = localStorage.getItem('forTips'); 
console.log("Bar" , forBarGraph);
if (forBarGraph && forBarGraph.length < 1){
let lastElement = forBarGraph[forBarGraph.length];
console.log("Bar2", lastElement);
}

function BarGraph() {
  const data = {
    labels: ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Sales 2020 (M)',
        data: forBarGraph,
        borderColor: [
          '#d4f1f9'
        ],
        backgroundColor: [
          '#d4f1f9'
        ],
        borderWidth: 2,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
      }
    ]
  }

  const options = {
    responsive: true,
    title: {
      display: true,
      text: 'Bar Chart'
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 100,
            stepSize: 10
          }
        }
      ]
    },
    plugins: {
      legend: {
        position: 'top',
      },
    },
  }
  return (
 
        <Bar data={data} options={options} />
     
  );
}

export default withRouter(BarGraph);