import React from 'react'
import { Line } from 'react-chartjs-2'
import {Chart as chartJs} from "chart.js/auto"


function LineChart({chartData}) {
   
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100
          }
        }
      ]
    }
  };
  
  return (
    <>
    <Line data={chartData} options={options}></Line>
    </>
  )
}

export default LineChart