import { Route, Routes } from 'react-router-dom';
import AuthNav from './AuthNav';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLogin } from 'redux/auth/auth-selectors';

export default function AppBar() {
  const isLogin = useSelector(selectIsLogin);

  console.log(isLogin);
  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #2A363B',
      marginBottom: '20px',
    },
  };
  return (
    <header style={styles.header}>
      <Navigation />
      {isLogin ? <UserMenu /> : <AuthNav />}
      {/* <AuthNav /> */}
      {/* <UserMenu /> */}
    </header>
  );
}
