import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[cnt, setCnt]=useState(0)
    const decrement=()=>{
        setCnt(--cnt)
    }
    const increment=()=>{
        setCnt(++cnt)
    }
  return (
    <div>
        <Typography variant='h2'>{cnt}</Typography>
      <br/>
      <Button variant='contained' onClick={decrement}>-</Button>
      <br/>
      <br/>
      <Button variant='contained' onClick={increment}>+</Button>
    </div>
  )
}

export default Counter
