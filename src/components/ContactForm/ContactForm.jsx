import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import { ErrorText } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { TextField, Button, makeStyles, Grid, Paper } from '@material-ui/core';
import { toast } from 'react-hot-toast';

const useStyles = makeStyles(theme => ({
  formContainer: {
    marginTop: theme.spacing(12),
    maxWidth: 400,
    margin: '0 auto',
    padding: theme.spacing(3),
    borderRadius: 8,
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.438)',
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
  header: {
    marginBottom: theme.spacing(2),
  },
}));

export const ContactForm = () => {
  const classes = useStyles();
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(
        /^[a-zA-Z\s'-]+$/,
        'Name may contain only letters, apostrophe, dash, and spaces'
      )
      .required('Name is required'),
    number: Yup.string()
      .matches(
        /^\+?[0-9\s()-]+$/,
        'Phone number must be digits and can contain spaces, dashes, parentheses, and can start with +'
      )
      .required('Phone number is required'),
  });
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, { resetForm }) => {
        const normalizeName = values.name.toLowerCase();
        if (
          contacts.find(contact => contact.name.toLowerCase() === normalizeName)
        ) {
          return toast.error(`${values.name} is already in contact`);
        }
        dispatch(addContact(values));
        resetForm();

        toast.success('Contact added successfully');
      }}
      validationSchema={validationSchema}
    >
      <Paper className={classes.formContainer}>
        <Form className={classes.form}>
          <h1 className={classes.header}>Phonebook</h1>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field
                as={TextField}
                type="text"
                name="name"
                label="Name"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                variant="outlined"
                helperText={<ErrorMessage name="name" component={ErrorText} />}
                InputProps={{
                  style: { width: '350px' },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                as={TextField}
                type="tel"
                name="number"
                label="Phone"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                variant="outlined"
                helperText={<ErrorMessage name="phone" component={ErrorText} />}
                InputProps={{
                  style: { width: '350px' },
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.submitButton}
          >
            Add contact
          </Button>
        </Form>
      </Paper>
    </Formik>
  );
};
