export default function LoginView() {
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
  return (
    <form style={styles.form}>
      <label style={styles.label}>
        Email
        <input />
      </label>
      <label style={styles.label}>
        Password
        <input />
      </label>

      <button type="submit">Registered</button>
    </form>
  );
}
