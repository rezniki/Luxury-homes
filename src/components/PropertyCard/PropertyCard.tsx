import React from "react";
import { Property } from "../../types/property";
import './style.css';

interface Props {
    property: Property;
}

const PropertyCard: React.FC<Props> = ( {property} ) => {
    return (
        <>
            <div className="property-card">
                <img className="property-image" src={property.image} alt={property.title} />

                <div className="property-info">
                    <h2 className="property-title">{property.title}</h2>
                    <p className="property-address">{property.address}, {property.state}</p>
                    <p className="property-price">${property.price.toLocaleString()}</p>
                    <div className="property-details">
                        <span>{property.area} m²</span>
                        <span>{property.bedrooms} 🛏</span>
                        <span>{property.bathrooms} 🛁</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PropertyCard