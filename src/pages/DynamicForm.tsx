import { Form, Formik } from 'formik';
import Field from '../components/Field';
import formJson from '../data/form.json';
import '../styles/styles.css';

const initialValues: { [key: string]: any } = {};

formJson.forEach(componentjson => {
  initialValues[componentjson.name] = componentjson?.value;
});

const DynamicForm = () => {
  return (
    <div>
      <h1>DynamicForm</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {
          () => (
            <Form>
              {
                formJson.map(component => {
                  return (
                    <Field
                      key={component.name}
                      name={component.name}
                      type={component.type}
                    >
                      {component.label}
                    </Field>
                  )
                })
              }

              <button type='submit'>Enviar</button>
            </Form>
          )
        }
      </Formik>
    </div>
  );
};

export default DynamicForm;