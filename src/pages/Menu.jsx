import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterBar from '../components/FilterBar';
import FoodCard from '../components/FoodCard';
import Header, { HeaderButton, HeaderLink } from '../components/Header';
import { useAuth } from '../context/AuthContext';
import { filterMenuItems } from '../data/menuData';
import { getSavedRecipes } from '../utils/savedRecipes';
import './Menu.css';

export default function Menu() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    category: 'all',
    diet: 'all',
    name: '',
  });
  const [savedCount, setSavedCount] = useState(() => getSavedRecipes().length);

  const items = filterMenuItems(filters);

  const refreshSavedCount = useCallback(() => {
    setSavedCount(getSavedRecipes().length);
  }, []);

  useEffect(() => {
    const handleUpdate = () => refreshSavedCount();
    window.addEventListener('storage', handleUpdate);
    window.addEventListener('saved-recipes-updated', handleUpdate);
    return () => {
      window.removeEventListener('storage', handleUpdate);
      window.removeEventListener('saved-recipes-updated', handleUpdate);
    };
  }, [refreshSavedCount]);

  const handleFilter = useCallback((nextFilters) => {
    setFilters(nextFilters);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/signin', { replace: true });
  };

  return (
    <div className="menu-page">
      <Header
        subtitle={user ? `Welcome, ${user.name}` : undefined}
        rightActions={
          <>
            <HeaderLink to="/saved-recipes" badge={savedCount}>
              Saved Recipes
            </HeaderLink>
            <HeaderButton onClick={handleLogout}>Logout</HeaderButton>
          </>
        }
      />

      <main className="menu-page__main">
        <FilterBar onFilter={handleFilter} />

        <p className="menu-page__count">
          {items.length} item{items.length !== 1 ? 's' : ''} found
        </p>

        {items.length === 0 ? (
          <p className="menu-page__empty">
            No dishes found. Try different filters.
          </p>
        ) : (
          <div className="menu-page__grid">
            {items.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
