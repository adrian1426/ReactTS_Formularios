import { Form, Formik } from 'formik';
import Field from '../components/Field';
import Select from '../components/Select';
import formJson from '../data/form.json';
import '../styles/styles.css';
import * as Yup from 'yup';

const initialValues: { [key: string]: any } = {};
const requiredField: { [key: string]: any } = {};

formJson.forEach(componentjson => {
  initialValues[componentjson.name] = componentjson?.value;

  if (componentjson.validations) {
    let schema = Yup.string();

    componentjson.validations.forEach(validation => {
      if (validation.type === 'required') {
        schema = schema.required('Este campo es requerido');
      }
    });

    requiredField[componentjson.name] = schema;
  }
});

const validationSchema = Yup.object({ ...requiredField });

const DynamicForm = () => {
  return (
    <div>
      <h1>DynamicForm</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {
          () => (
            <Form>
              {
                formJson.map(component => {
                  if (component.type === 'select') {
                    return (
                      <Select
                        key={component.name}
                        name={component.name}
                        label={component.label}
                      >
                        {component.options?.map(option => {
                          return (
                            <option
                              key={option.value}
                              value={option.value}
                            >
                              {option.label}
                            </option>
                          )
                        })}
                      </Select>
                    )
                  }

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