import React, {useEffect} from "react";
import { withRouter } from "react-router-dom";
import { firebase } from '../containers/firebase';

import { Line } from 'react-chartjs-2';
import {Chart, CategoryScale, LineController, LineElement, PointElement, LinearScale, Title} from 'chart.js'
Chart.register(CategoryScale, LineController, LineElement, PointElement, LinearScale, Title);

let forLineGraph = [];
forLineGraph = localStorage.getItem('sharad'); 
console.log("Line" , forLineGraph);

let forecastedData2 = [];
const state = {
  labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
  datasets: [
    {
      label: 'Balance History',
      fill: false,
      lineTension: 0.2,
      backgroundColor: '#2D60FF',
      borderColor: '#2D60FF',
      borderWidth: 2,
      data: [0,0,3,10,15,19,26,32,49,53,66,73,82,90,100,92,84,70,66,65,58,42,32,19,17,11,6,2,0]
      // data: forLineGraph
      
    }
  ]
}

function LineGraph() {

  useEffect(() => {
    firebase.database().ref("Forecasted Value").on("value", snapshot => {
        let forecastedData = [];
        snapshot.forEach(snap => {
          forecastedData.push(snap.val());
        });
        console.log("forecasted-Data", forecastedData);
        forecastedData2 = forecastedData;
        console.log("forecasted-Data", forecastedData2);
        localStorage.setItem('sharad', forecastedData2);
    });

}, []);

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