import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './NotFound.css';

export default function NotFound() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="not-found-page">
      <h1 className="not-found-page__title">404 – Page Not Found</h1>
      <p className="not-found-page__text">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        to={isAuthenticated ? '/' : '/signin'}
        className="not-found-page__link"
      >
        {isAuthenticated ? 'Go to Menu' : 'Go to Sign In'}
      </Link>
    </div>
  );
}
