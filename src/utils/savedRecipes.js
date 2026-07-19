export const SAVED_RECIPES_KEY = 'party_menu_saved_recipes';

export function getSavedRecipes() {
  try {
    const raw = localStorage.getItem(SAVED_RECIPES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveRecipe(item) {
  const saved = getSavedRecipes();
  if (saved.some((recipe) => recipe.id === item.id)) return saved;
  const updated = [...saved, item];
  localStorage.setItem(SAVED_RECIPES_KEY, JSON.stringify(updated));
  return updated;
}

export function removeRecipe(id) {
  const numericId = Number(id);
  const updated = getSavedRecipes().filter((recipe) => recipe.id !== numericId);
  localStorage.setItem(SAVED_RECIPES_KEY, JSON.stringify(updated));
  return updated;
}

export function isRecipeSaved(id) {
  const numericId = Number(id);
  return getSavedRecipes().some((recipe) => recipe.id === numericId);
}
