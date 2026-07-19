import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SavedRecipeCard from '../components/SavedRecipeCard';
import { BackLink } from '../components/Header';
import { getSavedRecipes, removeRecipe } from '../utils/savedRecipes';
import './SavedRecipes.css';

function notifySavedRecipesUpdated() {
  window.dispatchEvent(new Event('saved-recipes-updated'));
}

export default function SavedRecipes() {
  const [recipes, setRecipes] = useState(() => getSavedRecipes());

  const refreshRecipes = useCallback(() => {
    setRecipes(getSavedRecipes());
  }, []);

  useEffect(() => {
    const handleUpdate = () => refreshRecipes();
    window.addEventListener('storage', handleUpdate);
    window.addEventListener('saved-recipes-updated', handleUpdate);
    return () => {
      window.removeEventListener('storage', handleUpdate);
      window.removeEventListener('saved-recipes-updated', handleUpdate);
    };
  }, [refreshRecipes]);

  const handleRemove = (id) => {
    removeRecipe(id);
    setRecipes(getSavedRecipes());
    notifySavedRecipesUpdated();
  };

  return (
    <div className="saved-recipes-page">
      <header className="saved-recipes-page__header">
        <div>
          <h1 className="saved-recipes-page__title">Saved Recipes</h1>
          <p className="saved-recipes-page__subtitle">
            {recipes.length} recipe{recipes.length !== 1 ? 's' : ''} saved
          </p>
        </div>
        <BackLink />
      </header>

      {recipes.length === 0 ? (
        <div className="saved-recipes-page__empty">
          <p>No saved recipes yet.</p>
          <Link to="/" className="saved-recipes-page__browse">
            Browse the menu
          </Link>
        </div>
      ) : (
        <div className="saved-recipes-page__grid">
          {recipes.map((item) => (
            <SavedRecipeCard key={item.id} item={item} onRemove={handleRemove} />
          ))}
        </div>
      )}
    </div>
  );
}
