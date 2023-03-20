import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const State = () => {
    var[page,setpage]=useState("")
    const homeName=()=>{
        setpage("Home Page")
    }
    const galleryName=()=>{
        setpage("Gallery Page")
    }
    const contactName=()=>{
        setpage("Contact Page")
    }
  return (
    <div>
        <Button variant='contained' color='primary'onClick={homeName}>Home Page</Button>
        <Button variant='contained' color='secondary'onClick={galleryName}>Gallery Page</Button>
        <Button variant='contained' color='success'onClick={contactName}>Contact Page</Button><br/><br/>
        <Typography variant='h5'>Welcome to <b>{page}</b></Typography>
      
    </div>
  )
}

export default State
