import { useDispatch } from 'react-redux';
import { getUserInput } from 'redux/filter/slice';
import { TextField } from '@material-ui/core';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleInputChange = e => {
    dispatch(getUserInput(e.currentTarget.value.toLowerCase()));
  };

  return (
    <TextField
      label="Find contact by name"
      variant="outlined"
      onChange={handleInputChange}
      fullWidth
    />
  );
};
