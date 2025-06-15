import React from "react";
import { Property } from "../../types/property";
import "./style.css";
import { Link } from "react-router-dom";

interface Props {
    property: Property;
}

const PropertyCard: React.FC<Props> = ( {property} ) => {
    return (
        <>
            <div className="property-card">
                <img className="property-image" src={property.image} alt={property.title} />

                <div className="property-info">
                    <h2 className="property-card-title">{property.title}</h2>
                    <p className="property-address">{property.address}, {property.state}</p>
                    <p className="property-price">${property.price.toLocaleString()}</p>
                    <Link to={`/property/${property.id}`} className="property-button">
                        Подробнее →
                    </Link>
                </div>
            </div>
        </>
    );
};

export default PropertyCard