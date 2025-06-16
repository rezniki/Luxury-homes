import React from "react";
import { getFavorities } from "../../utils/favorites";
import { properties } from "../../mock/properties";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import './style.css';

const Favorites: React.FC = () => {
    const favoriteIds = getFavorities();
    const favoriteProperties = properties.filter(p => favoriteIds.includes(p.id));

    if (favoriteProperties.length === 0) {
        return <div className="favorites-page">No selected houses.</div>;
    }

    return (
        <div className="favorites-page">
            <h1 className="favorites-page-title">Favorites</h1>
            <div className="property-page-grid">
                {favoriteProperties.map(p => (
                <PropertyCard key={p.id} property={p} />
                ))}
            </div>
        </div>
    );
};

export default Favorites;