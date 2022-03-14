import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

{/* Add this search option to top right of marketplace page
    NEED TO DO
    - Styling
    - Importing to marketplace.tsx
 */}


export default function searchOption() {
  const [searchOption, setSearchOption] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSearchOption(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="search-option-dropdown">Search Option</InputLabel>
        <Select
          labelId="search-option-dropdown"
          id="search-option"
          value={searchOption}
          label=""
          onChange={handleChange}
        >
          <MenuItem value={1}>Low</MenuItem>
          <MenuItem value={2}>High</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}