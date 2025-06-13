import React from "react";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import { properties } from "../../mock/properties";
import "./style.css";

const Home: React.FC = () => {
    return (
        <>
            <div className="home-page">
                <h1 className="home-title">Luxury Properties</h1>
                <div className="property-grid">
                    {properties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home