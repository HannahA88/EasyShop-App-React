import * as React from 'react';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields(props) {

  function handleChange (e) {
    props.setProduct((prevState) => {
      return {...prevState, name: e.target.value}
    })
  }

  return (
   
      <TextField id="filled-basic" label="What to buy?" variant="filled" 
      required
      onChange={handleChange}/>
  );
}