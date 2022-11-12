import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const initialState: FormValues = {
  firstName: '',
  lastName: '',
  email: ''
};

const FormikYupPage = () => {

  return (
    <div>
      <h1>Formik Yup</h1>

      <Formik
        initialValues={initialState}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={
          Yup.object({
            firstName: Yup.string()
              .max(15, 'Máximo 15 caracteres')
              .required('Campo requerido'),
            lastName: Yup.string()
              .max(100, 'Máximo 100 caracteres')
              .required('Campo requerido'),
            email: Yup.string()
              .max(50, 'Máximo 50 caracteres')
              .email('Formato de correo no válido')
              .required('Campo requerido')
          })
        }
      >
        {
          (formik) => (
            <Form>
              <label>First Name</label>
              <Field type="text" name="firstName" />
              <ErrorMessage name="firstName" component='span' />

              <label>Last Name</label>
              <Field type="text" name="lastName" />
              <ErrorMessage name="lastName" component='span' />

              <label>Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component='span' />

              <button type="submit">
                Enviar
              </button>
            </Form>
          )
        }
      </Formik>
    </div>
  );
};

export default FormikYupPage;
