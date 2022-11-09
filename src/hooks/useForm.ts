import { useState } from 'react';

export const useForm = <T>(initialState: T) => {
  const [formData, setFormdata] = useState(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormdata(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const newPropsInput = (name: string) => ({
    name,
    value: (formData as any)[name],
    onChange: handleChange
  });

  return {
    formData,
    handleChange,
    newPropsInput
  };
};