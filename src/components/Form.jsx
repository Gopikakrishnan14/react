import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const Form = () => {
    const[form,setForm]=useState({
        myname:"",
        email:"",
        password:"",
        conpswd:"",
        phone:"",
        address:""
    })
    const capValue=()=>{
        console.log(form);
    }
  return (
    <div >
        <Box 
       
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
      style={({textAlign:'center'})}
    >
        
      <div className="a2">
      <h2>STUDENT REGISTRATION PAGE</h2>
        <div>
        
        <TextField
          required
          id="outlined-required"
          label="NAME"
          type='text'
          value={form.myname}
          onChange={(e)=>{
            setForm({...form,myname:e.target.value})
          }}
          
        />
        <TextField
          id="outlined-disabled"
          label="Email"
          type='email'
          value={form.email}
          onChange={(e)=>{
            setForm({...form,email:e.target.value})
          }}
          
        />
        </div>
        <div>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          
          value={form.password}
          onChange={(e)=>{
            setForm({...form,password:e.target.value})
          }}
        />
         <TextField
          id="outlined-password-input"
          label=" Confirm Password"
          type="password"
          
          value={form.conpswd}
          onChange={(e)=>{
            setForm({...form,conpswd:e.target.value})
          }}
        />
        </div>
        <div>
        <TextField
          id="outlined-number"
          label="PHONE NUMBER"
          type="tel"
          value={form.phone}
          onChange={(e)=>{
            setForm({...form,phone:e.target.value})
          }}
          
        />
        <TextField
          id="outlined-helperText"
          label="Address"
          type='text'
          value={form.address}
          onChange={(e)=>{
            setForm({...form,address:e.target.value})
          }}
        />
        </div>
        <br />
        <Button variant="contained" onClick={capValue}>REGISTER</Button>
      </div>
      
    </Box>
    </div>
  )
}

export default Form