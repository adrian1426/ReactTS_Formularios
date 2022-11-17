import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Field from '../components/Field';
import Select from '../components/Select';
import '../styles/styles.css';
import FieldUseField from '../components/FieldUseField';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  terms: boolean;
  jobType: string;
}

const initialState: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
  terms: false,
  jobType: ''
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
              .required('Campo requerido'),
            terms: Yup.boolean()
              .oneOf([true], 'Debe aceptar términos y condiciones'),
            jobType: Yup.string()
              .required('Requerido')
          })
        }
      >
        {
          () => (
            <Form>
              <FieldUseField name="firstName" type="text">First label</FieldUseField>
              <Field name='lastName'>Last Name</Field>
              <Field type="email" name='email'>Email</Field>

              <Select label='Job type' name='jobType'>
                <option value="">--Seleccione--</option>
                <option value="1">Dev Angular</option>
                <option value="2">Dev React</option>
                <option value="3"> Quick</option>
              </Select>

              <Field type="checkbox" name='terms'>Terminos y condiciones</Field>

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
