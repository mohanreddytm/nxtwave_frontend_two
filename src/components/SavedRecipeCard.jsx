import { useNavigate } from 'react-router-dom';
import './SavedRecipeCard.css';

export default function SavedRecipeCard({ item, onRemove }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/menu/${item.id}`);
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    onRemove(item.id);
  };

  return (
    <article className="saved-recipe-card">
      <div
        className="saved-recipe-card__clickable"
        onClick={handleCardClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCardClick();
          }
        }}
      >
        <div className="saved-recipe-card__image-wrap">
          <img src={item.image} alt={item.name} className="saved-recipe-card__image" />
          <span
            className={`saved-recipe-card__badge saved-recipe-card__badge--${item.isVeg ? 'veg' : 'nonveg'}`}
          >
            {item.isVeg ? 'Veg' : 'Non-Veg'}
          </span>
        </div>
        <div className="saved-recipe-card__body">
          <span className="saved-recipe-card__category">{item.category}</span>
          <h3 className="saved-recipe-card__name">{item.name}</h3>
          <p className="saved-recipe-card__description">{item.description}</p>
          <p className="saved-recipe-card__servings">{item.servings}</p>
        </div>
      </div>
      <button type="button" className="saved-recipe-card__remove" onClick={handleRemove}>
        Remove
      </button>
    </article>
  );
}
