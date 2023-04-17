import { NavLink } from 'react-router-dom';

export default function AuthNav() {
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
      <NavLink
        to="/restered"
        style={styles.link}
        // activeStyle={styles.activeLink}
      >
        Registered
      </NavLink>
      <NavLink
        to="/sing-in"
        style={styles.link}
        // activeStyle={styles.activeLink}
      >
        Sing-in
      </NavLink>
    </nav>
  );
}
