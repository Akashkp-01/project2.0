import { Typography } from '@mui/material'
import React from 'react'

const Samp = () => {
    var pname=["Venkidu","Gouri","Avani"]
  return (
    <div>
      <ul>
        {pname.map((value,index)=>{return <li key={index}>{value}</li>})}
      </ul>
    </div>
  )
}

export default Samp
