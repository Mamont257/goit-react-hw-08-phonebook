import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operation';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const styles = {
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      width: '350px',
    },
    label: {
      display: 'flex',
      flexDirection: 'column',
    },
  };

  function handleChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);

      default:
        return;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  }

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <label style={styles.label}>
        Email
        <input type="text" name="email" value={email} onChange={handleChange} />
      </label>
      <label style={styles.label}>
        Password
        <input
          type="text"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Sind-in</button>
    </form>
  );
}
