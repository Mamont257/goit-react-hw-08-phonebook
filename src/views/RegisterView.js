import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operation';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
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
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  }
  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <label style={styles.label}>
        Name
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
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

      <button type="submit">Registered</button>
    </form>
  );
}
