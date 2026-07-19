import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BackLink, HeaderLink } from '../components/Header';
import { getMenuItemById } from '../data/menuData';
import {
  getSavedRecipes,
  isRecipeSaved,
  removeRecipe,
  saveRecipe,
} from '../utils/savedRecipes';
import './FoodDetail.css';

function notifySavedRecipesUpdated() {
  window.dispatchEvent(new Event('saved-recipes-updated'));
}

export default function FoodDetail() {
  const { id } = useParams();
  const item = getMenuItemById(id);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (item) {
      setSaved(isRecipeSaved(item.id));
    }
  }, [item]);

  if (!item) {
    return (
      <div className="food-detail-page">
        <div className="food-detail-page__not-found">
          <h1>Dish not found</h1>
          <p>Sorry, we couldn&apos;t find that recipe.</p>
          <Link to="/" className="food-detail-page__link">
            Back to Menu
          </Link>
        </div>
      </div>
    );
  }

  const handleToggleSave = () => {
    if (saved) {
      removeRecipe(item.id);
      setSaved(false);
    } else {
      saveRecipe(item);
      setSaved(true);
    }
    notifySavedRecipesUpdated();
  };

  const savedCount = getSavedRecipes().length;

  return (
    <div className="food-detail-page">
      <nav className="food-detail-page__nav">
        <BackLink />
        <div className="food-detail-page__nav-actions">
          <HeaderLink to="/saved-recipes" badge={savedCount}>
            Saved Recipes
          </HeaderLink>
          <button
            type="button"
            className={`food-detail-page__save-btn${saved ? ' food-detail-page__save-btn--saved' : ''}`}
            onClick={handleToggleSave}
          >
            {saved ? '✓ Saved' : 'Save Recipe'}
          </button>
        </div>
      </nav>

      <div className="food-detail-page__hero card">
        <div className="food-detail-page__image-wrap">
          <img src={item.image} alt={item.name} className="food-detail-page__image" />
        </div>
        <div className="food-detail-page__info">
          <div className="food-detail-page__badges">
            <span className="food-detail-page__badge food-detail-page__badge--category">
              {item.category}
            </span>
            <span
              className={`food-detail-page__badge food-detail-page__badge--${item.isVeg ? 'veg' : 'nonveg'}`}
            >
              {item.isVeg ? '🌿 Veg' : '🥩 Non-Veg'}
            </span>
          </div>
          <h1 className="food-detail-page__title">{item.name}</h1>
          <p className="food-detail-page__servings">{item.servings}</p>
          <p className="food-detail-page__description">{item.fullDescription}</p>
        </div>
      </div>

      <div className="food-detail-page__ingredients card">
        <h2 className="food-detail-page__ingredients-title">Ingredients</h2>
        <ul className="food-detail-page__ingredients-list">
          {item.ingredients.map((ingredient) => (
            <li key={ingredient.name} className="food-detail-page__ingredient">
              <span>{ingredient.name}</span>
              <span>{ingredient.quantity}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
