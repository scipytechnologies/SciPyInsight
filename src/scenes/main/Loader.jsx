import React from 'react'
import DotLoader from "react-spinners/DotLoader";

function Loader() {
  return (
    <div style={{height: '100vh', width: '100vw', backgroundColor: '#ffff', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <DotLoader color="#7f18c8" />
    </div>
  )
}

export default Loader