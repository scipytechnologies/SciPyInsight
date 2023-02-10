import React from 'react'
import { Bar } from 'react-chartjs-2'
import {Chart as chartJs} from "chart.js/auto"
import { useState } from 'react'

function BarChart({chartData}) {
   
  
  return (
    <>
    <Bar data={chartData} ></Bar>
    </>
  )
}

export default BarChart