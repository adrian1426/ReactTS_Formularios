import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

const initialState = {
  name: '',
  email: '',
  password1: '',
  password2: ''
};

const RegisterPage = () => {
  const { formData, handleChange } = useForm(initialState);
  const { name, email, password1, password2 } = formData;

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
          name='name'
          placeholder="name"
          value={name}
          onChange={handleChange}
        />

        <input
          type="email"
          name='email'
          placeholder="email"
          value={email}
          onChange={handleChange}
        />

        <input
          type="password"
          name='password1'
          placeholder="password"
          value={password1}
          onChange={handleChange}
        />

        <input
          type="password"
          name='password2'
          placeholder="repeat password"
          value={password2}
          onChange={handleChange}
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