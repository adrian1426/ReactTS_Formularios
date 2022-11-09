import { useFormik } from 'formik';
import '../styles/styles.css';

const initialState = {
  firstName: '',
  lastName: '',
  email: ''
};

const FormikPage = () => {
  const formik = useFormik({
    initialValues: initialState,
    onSubmit: (values) => {
      console.log(values);
    }
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
        />

        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />

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