import { ErrorMessage, Field as FieldFormik } from 'formik';

interface Props {
  name: string;
  type?: string;
  children: React.ReactNode;
  rest?: object;
}


const Field = (props: Props) => {
  const { name, type = 'text', children, ...rest } = props;

  return (
    <>
      <label>{children}</label>
      <FieldFormik
        type={type}
        name={name}
        {...rest}
      />
      <ErrorMessage
        name={name}
        component='span'
      />
    </>
  );
};

export default Field;