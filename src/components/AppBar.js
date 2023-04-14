import { Route, Routes } from 'react-router-dom';
import AuthNav from './AuthNav';
import Navigation from './Navigation';
import UserMenu from './UserMenu';

export default function AppBar() {
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
      <AuthNav />
      <UserMenu />
    </header>
  );
}
