import { useState } from 'react';
import './FilterBar.css';

const CATEGORIES = [
  { label: 'All', value: 'all' },
  { label: 'Starter', value: 'starter' },
  { label: 'Main', value: 'main' },
  { label: 'Sides', value: 'sides' },
  { label: 'Desert', value: 'desert' },
];

const DIETS = [
  { label: 'All', value: 'all' },
  { label: 'Veg', value: 'veg', dot: 'veg' },
  { label: 'Non-Veg', value: 'nonveg', dot: 'nonveg' },
];

export default function FilterBar({ onFilter }) {
  const [category, setCategory] = useState('all');
  const [diet, setDiet] = useState('all');
  const [searchInput, setSearchInput] = useState('');

  const applyFilters = (next = {}) => {
    const filters = {
      category: next.category ?? category,
      diet: next.diet ?? diet,
      name: next.name ?? searchInput,
    };
    onFilter(filters);
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
    applyFilters({ category: value });
  };

  const handleDietChange = (value) => {
    setDiet(value);
    applyFilters({ diet: value });
  };

  const handleSearch = () => {
    applyFilters({ name: searchInput });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="filter-bar">
      <div className="filter-bar__group">
        <span className="filter-bar__label">Category</span>
        <div className="filter-bar__chips">
          {CATEGORIES.map((item) => (
            <button
              key={item.value}
              type="button"
              className={`filter-bar__chip${category === item.value ? ' filter-bar__chip--active' : ''}`}
              onClick={() => handleCategoryChange(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-bar__group">
        <span className="filter-bar__label">Diet</span>
        <div className="filter-bar__chips">
          {DIETS.map((item) => (
            <button
              key={item.value}
              type="button"
              className={`filter-bar__chip${diet === item.value ? ' filter-bar__chip--active' : ''}`}
              onClick={() => handleDietChange(item.value)}
            >
              {item.dot && (
                <span className={`filter-bar__dot filter-bar__dot--${item.dot}`} />
              )}
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-bar__search">
        <input
          type="text"
          className="filter-bar__input"
          placeholder="Search by name (e.g. chicken)"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button type="button" className="filter-bar__search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}
