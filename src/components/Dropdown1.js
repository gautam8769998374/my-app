import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function Dropdown({values , label , setSelctedValue, selctedValue}) {
//   const [planet, setPlanet] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setSelctedValue(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
        Open the select
      </Button>
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="demo-controlled-open-select-label">{label}</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={selctedValue}
          label= {label}
          onChange={handleChange}
        >
         {values.map(value => <MenuItem value = {value}>{value.name}</MenuItem>)}
        
        </Select>
      </FormControl>
    </div>
  );
}