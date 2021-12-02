import React from "react";
import { withRouter } from "react-router-dom";

import { Line } from 'react-chartjs-2';
import {Chart, CategoryScale, LineController, LineElement, PointElement, LinearScale, Title} from 'chart.js'
Chart.register(CategoryScale, LineController, LineElement, PointElement, LinearScale, Title);


const state = {
  labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
  datasets: [
    {
      label: 'Balance History',
      fill: false,
      lineTension: 0.2,
      backgroundColor: '#2D60FF',
      borderColor: '#2D60FF',
      borderWidth: 2,
      data: [5, 59, 40, 81, 56, 92, 28]
    }
  ]
}

function LineGraph() {

    return (
      <div>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Balance History',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }

export default withRouter(LineGraph);