import { useFormik } from 'formik';
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

  const formik = useFormik({
    initialValues: initialState,
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
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
  });

  return (
    <div>
      <h1>Formik Yup</h1>

      <form onSubmit={formik.handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          {...formik.getFieldProps('firstName')}
          className={(formik.touched.firstName && formik.errors.firstName) ? 'has-error' : ''}
        />
        {(formik.touched.firstName && formik.errors.firstName) && <span>{formik.errors.firstName}</span>}

        <label>Last Name</label>
        <input
          type="text"
          {...formik.getFieldProps('lastName')}
          className={(formik.touched.lastName && formik.errors.lastName) ? 'has-error' : ''}
        />
        {(formik.touched.lastName && formik.errors.lastName) && <span>{formik.errors.lastName}</span>}

        <label>Email</label>
        <input
          type="email"
          {...formik.getFieldProps('email')}
          className={(formik.touched.email && formik.errors.email) ? 'has-error' : ''}
        />
        {(formik.touched.email && formik.errors.email) && <span>{formik.errors.email}</span>}

        <button
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormikYupPage;