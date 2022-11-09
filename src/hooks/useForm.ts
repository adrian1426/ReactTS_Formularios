import { useState } from 'react';

export const useForm = <T, E>(
  initialState: T,
  initialError?: E,
  fnValidation?: (state: E, event: React.ChangeEvent<HTMLInputElement>) => E
) => {

  const [formData, setFormdata] = useState(initialState);
  const [errorForm, setErrorForm] = useState(initialError);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormdata(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    setErrorForm(prevState => fnValidation && fnValidation(prevState!, event));
  };

  const resetForm = () => {
    setFormdata(initialState);
    setErrorForm(initialError);
  };

  const newPropsInput = (name: string) => ({
    name,
    value: (formData as any)[name],
    onChange: handleChange,
    onBlur: handleBlur
  });

  return {
    formData,
    errorForm,
    handleChange,
    newPropsInput,
    resetForm
  };
};