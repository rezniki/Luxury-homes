const FAVOTITES_KEY = 'favorites';

export const getFavorities = (): number[] => {
    const stored = localStorage.getItem(FAVOTITES_KEY);
    return stored ? JSON.parse(stored) : [];
};

export const toggleFavorite = (id: number): void => {
    const current = getFavorities();
    const updated = current.includes(id) 
        ? current.filter((favId) => favId !== id)
        : [...current, id];
        localStorage.setItem(FAVOTITES_KEY, JSON.stringify(updated));
};

export const isFavorite = (id: number): boolean => {
    return getFavorities().includes(id);
};
