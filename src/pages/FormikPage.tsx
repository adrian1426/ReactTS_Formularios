import { useFormik, FormikErrors } from 'formik';
import '../styles/styles.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const initialState = {
  firstName: '',
  lastName: '',
  email: ''
};

const FormikPage = () => {

  const validateForm = (values: FormValues) => {
    const errorsForm: FormikErrors<FormValues> = {};

    if (!values.firstName) {
      errorsForm.firstName = 'Este campo es requerido';
    }

    if (!values.lastName) {
      errorsForm.lastName = 'Este campo es requerido';
    }

    if (!values.email) {
      errorsForm.email = 'Este campo es requerido';
    }

    return errorsForm;
  };

  const formik = useFormik({
    initialValues: initialState,
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => validateForm(values)
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={(formik.touched.firstName && formik.errors.firstName) ? 'has-error' : ''}
        />
        {(formik.touched.firstName && formik.errors.firstName) && <span>{formik.errors.firstName}</span>}

        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={(formik.touched.lastName && formik.errors.lastName) ? 'has-error' : ''}
        />
        {(formik.touched.lastName && formik.errors.lastName) && <span>{formik.errors.lastName}</span>}

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
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

export default FormikPage;