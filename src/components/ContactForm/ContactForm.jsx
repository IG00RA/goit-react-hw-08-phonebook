import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import { ErrorText } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { toast } from 'react-hot-toast';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export const ContactForm = () => {
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
          return toast.error(`${values.name} is already in contact`, {
            position: 'top-center',
          });
        }
        dispatch(addContact(values));
        resetForm();

        toast.success('Contact added successfully', {
          position: 'top-center',
        });
      }}
      validationSchema={validationSchema}
    >
      <Card
        sx={{
          maxWidth: 400,
          display: 'flex',
          margin: '0 auto',
          marginTop: '80px',
        }}
      >
        <Form>
          <h1>Phonebook</h1>
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
                  style: { width: '400px' },
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
                helperText={
                  <ErrorMessage name="number" component={ErrorText} />
                }
                InputProps={{
                  style: { width: '400px' },
                }}
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add contact
          </Button>
        </Form>
      </Card>
    </Formik>
  );
};
