import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useState } from 'react'

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];




const Home = () => {
    const[name,setName]=useState('GOPIKA');
    const[count1,setCount]=useState(0);
    const changeValue=()=>{
        setName('Gokul')
    }
    const changeCount=()=>{
        setCount(count1+1)
    }
    const[Name1,setName1]=useState('');
   
  return (
    <div>
        <h2>welcome   { name}</h2>
                <h2 style={({color:'black',backgroundColor:'blueviolet'})}>FOOD TABLE</h2> 
                * <Button variant="contained" onClick={changeValue}>Change</Button>
                <Button variant="contained" onClick={changeCount}>Count</Button>
                <small>the button pressed{count1+1} times</small>

                <br />
              <br />  <TextField id="filled-basic" label="name" variant="filled" value={Name1}  onChange={(e)=>{
                setName1(e.target.value)
              }
              } />
              <p>name entered is:{Name1}</p>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Home