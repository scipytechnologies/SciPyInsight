import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function CircularProgressBar({ props }) {
    return (
        <div style={{ width: 200, height: 200 }}>
            <CircularProgressbar value={props.percentage} />
        </div>
    )
}


export default CircularProgressBar

