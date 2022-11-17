import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Field from '../components/Field';
import '../styles/styles.css';

const initialState = {
  name: '',
  email: '',
  password1: '',
  password2: ''
};


const RegisterPage2 = () => {
  return (
    <div>
      <h1>Register page 2</h1>

      <Formik
        initialValues={initialState}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={
          Yup.object({
            name: Yup.string()
              .max(15, 'Máximo 15 caracteres')
              .required('Campo requerido'),
            email: Yup.string()
              .max(50, 'Máximo 50 caracteres')
              .email('Formato de correo no válido')
              .required('Campo requerido'),
            password1: Yup.string()
              .max(100, 'Máximo 100 caracteres')
              .required('Campo requerido'),
            password2: Yup.string()
              .max(100, 'Máximo 100 caracteres')
              .oneOf([Yup.ref('password1')], 'las contraseñas no son iguales')
              .required('Campo requerido'),
          })
        }
      >
        {
          ({ handleReset }) => (
            <Form>
              <Field name='name'>Name</Field>
              <Field name='email' type='email'>Email</Field>
              <Field name='password1' type='password'>Password</Field>
              <Field name='password2' type='password'>Repetir password</Field>

              <button
                type="submit"
              >
                Create
              </button>

              <button onClick={handleReset}>Reset</button>
            </Form>
          )
        }
      </Formik>
    </div>
  );
};

export default RegisterPage2;