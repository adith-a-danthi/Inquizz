import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h3 className="nav-title heading-2">
        <Link to="/">
          <span className="fas fa-bolt fa-xs mr-2"></span>
          Inquizz
        </Link>
      </h3>
    </nav>
  );
}
