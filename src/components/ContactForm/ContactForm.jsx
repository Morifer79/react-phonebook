import {
  ButtonAdd,
  ErrMsg,
  FormStyled,
  FormWrapper,
  InputStyled,
  Label,
} from 'components/ContactForm/ContactForm.styled';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(16, 'Too Long!')
    .required('The field cannot be left empty!')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore Artagnan'
    ),
  number: Yup.string()
    .min(9, 'enter the number in the format XXX-XX-XX')
    .max(9, 'enter the number in the format XXX-XX-XX')
    .required('The field cannot be left empty!')
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

export const ContactForm = ({ newContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    newContact(values);
    resetForm();
  };

  const initialValues = {
    name: '',
    number: '',
  };

  return (
    <FormWrapper>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
      >
        <FormStyled autoComplete="off">
          <Label id={nanoid()}>
            Name
            <InputStyled type="text" name="name" required />
            <ErrMsg name="name" component="div" />
          </Label>
          <Label id={nanoid()}>
            Number
            <InputStyled type="tel" name="number" required />
            <ErrMsg name="number" component="div" />
          </Label>
          <ButtonAdd type="submit">Add contacts</ButtonAdd>
        </FormStyled>
      </Formik>
    </FormWrapper>
  );
};
