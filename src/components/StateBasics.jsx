import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

function StateBasics() {
    var [fname, setfname] = useState("Venkidu")
    const changeName = () => {
        setfname("Suresh")
    }
    return (
        <div>
            <Typography color={'primary'}>Welcome <b>{fname}</b></Typography>
            <br />
            <Button variant='outlined' onClick={changeName}>CHANGE</Button>
        </div>

    )
}

export default StateBasics
