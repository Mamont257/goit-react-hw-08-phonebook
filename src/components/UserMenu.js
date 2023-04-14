export default function UserMenu() {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
    },
    avatar: {
      marginRight: 4,
    },
    name: {
      fontWeight: 700,
      marginRight: 12,
    },
  };
  return (
    <div style={styles.container}>
      <span style={styles.name}>Welcome</span>
      <button type="button">Exit</button>
    </div>
  );
}
