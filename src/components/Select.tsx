import { ErrorMessage, Field } from "formik";

interface Props {
  label: string;
  name: string;
  children: React.ReactNode;
  rest?: object;
}


const Select = (props: Props) => {
  const { label, name, children, ...rest } = props;

  return (
    <>
      <label>{label}</label>
      <Field name={name} as='select' {...rest}>
        {children}
      </Field>
      <ErrorMessage name={name} component='span' />
    </>
  );
};

export default Select;