import { useField } from 'formik';

interface Props {
  name: string;
  type?: string;
  children: React.ReactNode;
  rest?: object;
}


const FieldUseField = (props: Props) => {
  const { children, ...restProps } = props;
  const [field, meta] = useField(restProps);

  return (
    <>
      <label>{children}</label>
      <input {...field} {...restProps} />
      {meta.touched && meta.error && (<span>{meta.error}</span>)}
    </>
  );
};

export default FieldUseField;