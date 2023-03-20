import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Forms = () => {
    var[Inputname,setInputname]=useState({
        fname:"",
        lname:''
    })
    const inputHandler=(e)=>{
        const{name,value}=e.target
        setInputname({...Inputname,[name]:value})
   
    }
  return (
    <div>
        <Typography>First Name is<b> {Inputname.fname}</b></Typography><br/>
      <TextField label='First Name'variant='outlined' name='fname'value={Inputname.fname}onChange={inputHandler}/><br/>
      <Typography>Second Name is <b>{Inputname.lname}</b></Typography><br/>
      <TextField label='Second Name'variant='outlined' name='lname'value={Inputname.lname} onChange={inputHandler}/><br/>
    </div>
  )
}

export default Forms
