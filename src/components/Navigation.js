import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLogin } from 'redux/auth/auth-selectors';

export default function Navigation() {
  const isLogin = useSelector(selectIsLogin);

  const styles = {
    link: {
      display: 'inline-block',
      textDecoration: 'none',
      padding: 12,
      fontWeight: 700,
      color: '#2A363B',
    },
    activeLink: {
      color: '#E84A5F',
    },
  };

  return (
    <nav>
      <NavLink to="/" style={styles.link}>
        Home
      </NavLink>
      {isLogin && (
        <NavLink to="/contact" style={styles.link}>
          Contact
        </NavLink>
      )}
    </nav>
  );
}
