import { useNavigate } from 'react-router-dom';
import './FoodCard.css';

export default function FoodCard({ item }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/menu/${item.id}`);
  };

  return (
    <article className="food-card" onClick={handleClick} role="button" tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <div className="food-card__image-wrap">
        <img src={item.image} alt={item.name} className="food-card__image" />
        <span
          className={`food-card__badge food-card__badge--${item.isVeg ? 'veg' : 'nonveg'}`}
        >
          {item.isVeg ? 'Veg' : 'Non-Veg'}
        </span>
      </div>
      <div className="food-card__body">
        <span className="food-card__category">{item.category}</span>
        <h3 className="food-card__name">{item.name}</h3>
        <p className="food-card__description">{item.description}</p>
        <p className="food-card__servings">{item.servings}</p>
      </div>
    </article>
  );
}
