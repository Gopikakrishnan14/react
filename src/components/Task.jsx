import { Button } from '@mui/material';
import React, { useState } from 'react'

const Task = () => {
    const [count1,setCount]=useState(0);
    
    const changeCount=()=>{
        setCount(count1+1)
    }
    const[name1,setName1]=useState('');
    
    const decreement=()=>{
        setCount(count1-1)}
    
        const reset=()=>{
            setCount(0)
        }

  return (
    <div>
          
    <Button variant="contained" onClick={changeCount}>Count</Button>
    <small>the button pressed{count1}times</small><br /><br />
    <Button variant="contained" onClick={decreement}>decreement</Button>
    
    <Button  variant="contained"onClick={reset} >Reset</Button>
   
    </div>
  )
}

export default Task