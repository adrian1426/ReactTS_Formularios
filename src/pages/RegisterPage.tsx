import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

const initialState = {
  name: '',
  email: '',
  password1: '',
  password2: ''
};

const initialError = {
  name: {
    isError: false,
    message: ''
  },
  email: {
    isError: false,
    message: ''
  },
  password1: {
    isError: false,
    message: ''
  },
  password2: {
    isError: false,
    message: ''
  }
};

const RegisterPage = () => {
  const { formData, errorForm, newPropsInput, resetForm } = useForm(initialState, initialError, formValidation);

  function formValidation(state = initialError, event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    let valueError = {
      isError: false,
      message: ''
    };

    if (value.trim().length <= 0) {
      valueError.isError = true;
      valueError.message = 'El valor es requerido';
    }

    return {
      ...state,
      [name]: valueError
    };
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("state: ", formData);
  };

  return (
    <div>
      <h1>Register page</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          className={errorForm?.name.isError ? 'has-error' : ''}
          {...newPropsInput('name')}
        />
        {errorForm?.name.isError && <span>{errorForm?.name.message}</span>}

        <input
          type="email"
          placeholder="email"
          className={errorForm?.email.isError ? 'has-error' : ''}
          {...newPropsInput('email')}
        />
        {errorForm?.email.isError && <span>{errorForm?.email.message}</span>}

        <input
          type="password"
          placeholder="password"
          className={errorForm?.password1.isError ? 'has-error' : ''}
          {...newPropsInput('password1')}
        />
        {errorForm?.password1.isError && <span>{errorForm?.password1.message}</span>}

        <input
          type="password"
          placeholder="repeat password"
          className={errorForm?.password2.isError ? 'has-error' : ''}
          {...newPropsInput('password2')}
        />
        {errorForm?.password2.isError && <span>{errorForm?.password2.message}</span>}

        <button
          type="submit"
        >
          Create
        </button>

        <button
          type="button"
          onClick={resetForm}
        >
          Restet
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;