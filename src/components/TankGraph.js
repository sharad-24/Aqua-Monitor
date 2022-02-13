import React, {useEffect} from 'react';
import { withRouter } from "react-router-dom";

import GaugeChart from 'react-gauge-chart'
import './index.css';

let forTankGraph = [];  
forTankGraph = localStorage.getItem('forTips'); 
console.log("Tank" , forTankGraph);

let lastElement3 = [];
if (forTankGraph && forTankGraph.length < 1){
let lastElement = forTankGraph[forTankGraph.length - 1];
let lastElement2 = forTankGraph[forTankGraph.length - 2];
lastElement3 = lastElement2 + lastElement;
console.log("Tank2", lastElement3);
}




function TankGraph() {

  useEffect(() => {
    if(lastElement3 == 0){
        lastElement3 = 100;
    }
    console.log("Notification2", lastElement3);
    localStorage.setItem('circularProgress', lastElement3);
}, []);
  
  return (
 
    <GaugeChart id="gauge-chart1"
    className="gauge-chart1"
    colors={["#FF5F6D", "#FFC371"]} 
    arcWidth={0.3} 
    nrOfLevels={5} 
    percent={lastElement3/100}  />
     
  );
}

export default withRouter(TankGraph);