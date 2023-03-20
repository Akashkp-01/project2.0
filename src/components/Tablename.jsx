import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

function Tablename() {
 var pname=[{name:"VenkiduSura",age:92,place:"Palakkal"},{name:"Gouri",age:42,place:"Chalakudy"},{name:"Avani",age:52,place:"Thrissur"}]

    return (
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Place</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {pname.map((value,index)=>{
                    return <TableRow>
                        <TableCell key={index}>{value.name}</TableCell>
                        <TableCell key={index}>{value.age}</TableCell>
                        <TableCell key={index}>{value.place}</TableCell>


                </TableRow>})}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default Tablename
