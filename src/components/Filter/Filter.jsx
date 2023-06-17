import { useDispatch } from 'react-redux';
import { getUserInput } from 'redux/filter/slice';
import { TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleInputChange = e => {
    dispatch(getUserInput(e.currentTarget.value.toLowerCase()));
  };

  return (
    <TextField
      sx={{
        marginTop: '10px',
      }}
      label="Find contact by name"
      variant="outlined"
      onChange={handleInputChange}
      fullWidth
    />
  );
};
