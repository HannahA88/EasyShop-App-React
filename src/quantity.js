import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function BasicTextFields(props) {

  function handleChange (e) {
    props.setProduct((prevState) => {
      return {...prevState, quantity: e.target.value}
    } )
  }

  return (
   
      <TextField id="input_quantity" label="How many?" variant="filled" 
      required
      onChange={handleChange}/>
  );
}
