import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operation';
import { selectUserName } from 'redux/auth/auth-selectors';

export default function UserMenu() {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

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
      <span style={styles.name}>Welcome, {userName}</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Exit
      </button>
    </div>
  );
}
