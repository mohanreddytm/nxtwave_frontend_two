import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './SignIn.css';

export default function SignIn() {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate('/', { replace: true });
    } catch (err) {
      setError(err.message || 'Sign in failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-card">
        <div className="signin-card__brand">
          <span className="signin-card__icon" aria-hidden="true">🍽️</span>
          <h1 className="signin-card__title">Party Menu</h1>
          <p className="signin-card__subtitle">
            Sign in to explore our delicious menu
          </p>
        </div>

        {error && (
          <div className="signin-card__error" role="alert">
            {error}
          </div>
        )}

        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="signin-form__field">
            <label htmlFor="email" className="signin-form__label">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="signin-form__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          <div className="signin-form__field">
            <label htmlFor="password" className="signin-form__label">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="signin-form__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className="signin-form__submit"
            disabled={loading}
          >
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
