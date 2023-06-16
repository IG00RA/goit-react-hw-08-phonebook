// import { FormField } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { getUserInput } from 'redux/filter/slice';
import { TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formField: {
    marginTop: '20px',
    maxWidth: 400,
    margin: '0 auto',
    padding: theme.spacing(3),
    borderRadius: 8,
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.438)',
  },
  header: {
    marginBottom: '16px',
  },
}));

export const Filter = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleInputChange = e => {
    dispatch(getUserInput(e.currentTarget.value.toLowerCase()));
  };

  return (
    <div className={classes.formField}>
      <h2 className={classes.header}>Contacts</h2>
      <TextField
        label="Find contact by name"
        variant="outlined"
        onChange={handleInputChange}
        fullWidth
      />
    </div>
  );
};
