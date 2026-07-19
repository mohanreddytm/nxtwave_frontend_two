import { Link } from 'react-router-dom';
import './Header.css';

export default function Header({
  title = 'Party Menu',
  subtitle,
  leftAction,
  rightActions,
}) {
  return (
    <header className="header">
      <div className="header__left">
        {leftAction}
        <div className="header__brand">
          <h1 className="header__title">{title}</h1>
          {subtitle && <p className="header__subtitle">{subtitle}</p>}
        </div>
      </div>
      {rightActions && <div className="header__actions">{rightActions}</div>}
    </header>
  );
}

export function HeaderLink({ to, children, badge }) {
  return (
    <Link to={to} className="header__link">
      {children}
      {badge != null && badge > 0 && (
        <span className="header__badge">{badge}</span>
      )}
    </Link>
  );
}

export function HeaderButton({ onClick, children, variant = 'outline' }) {
  return (
    <button
      type="button"
      className={`header__button header__button--${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function BackLink({ to = '/', children = '← Back to Menu' }) {
  return (
    <Link to={to} className="header__back-link">
      {children}
    </Link>
  );
}
