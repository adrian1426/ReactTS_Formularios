import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

const initialState = {
  name: '',
  email: '',
  password1: '',
  password2: ''
};

const RegisterPage = () => {
  const { formData, newPropsInput } = useForm(initialState);

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    console.log("state: ", formData);
  };

  return (
    <div>
      <h1>Register page</h1>

      <form>
        <input
          type="text"
          placeholder="name"
          {...newPropsInput('name')}
        />

        <input
          type="email"
          placeholder="email"
          {...newPropsInput('email')}
        />

        <input
          type="password"
          placeholder="password"
          {...newPropsInput('password1')}
        />

        <input
          type="password"
          placeholder="repeat password"
          {...newPropsInput('password2')}
        />

        <button
          type="submit"
          onClick={handleSubmit}
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;