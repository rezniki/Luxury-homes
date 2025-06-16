import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { properties } from "../../mock/properties";
import { Property } from "../../types/property";
import './style.css';
import { isFavorite, toggleFavorite } from "../../utils/favorites";
import { useEffect, useState } from "react";

const PropertyPage: React.FC = () => {
    
    const {id} = useParams<{id: string}>();
    const navigate = useNavigate();
    
    const property: Property | undefined = properties.find(
        (p) => p.id === Number(id)
    );

    const [favorite, setFavorite] = useState(false);

    useEffect(() => {
        if (property) {
            setFavorite(isFavorite(property.id));
        }
    }, [property]);

    const handleFavorite = () => {
        if (property) {
            toggleFavorite(property.id);
            setFavorite(!favorite);
        }
    };
    
    if (!property) {
        return <div className="property-page">Дом не найден</div>;
    }

    

    return (
        <>
            <div className="property-page">
                <button className="property-back-button" onClick={() => navigate(-1)}>
                    ← Назад
                </button>

                <img className="property-image-full" src={property.image} alt={property.title}/>
                <h1 className="property-title">{property.title}</h1>
                <p className="property-price">${property.price.toLocaleString()}</p>
                <p className="property-address-state">{property.address}, {property.state}</p>
                <ul className="property-details">
                    <li>Area: {property.area}  m²</li>
                    <li>Bedrooms: {property.bedrooms} 🛏</li>
                    <li>Bathrooms: {property.bathrooms} 🛁</li>
                </ul>
                <p className="property-description">
                    {property.description || 'The description of this house will be added later.'}
                </p>

                <button className="property-favorite-button">
                    {favorite ? 'Remove from favorites' : 'Add to favorites'}
                </button>
            </div>
        </>
    );
};

export default PropertyPage