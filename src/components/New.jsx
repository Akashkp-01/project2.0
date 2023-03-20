import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const New = () => {
    var[fName,setName]=useState("")
    const changeName =(event)=>{
        const{name,value}=event.target;
        setName(value);
    }
    useEffect(()=>{
        setName("[Enter name]")
    },[])
  return (
    <div>
        <Typography variant='h3'>My name is <b>{fName}</b></Typography><br/>
        <TextField label="Enter name" variant='standard' onChange={(e)=>changeName(e)}/><br/><br/>
       
    </div>
  )
}

export default New
