import React from "react";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import './place.css';

const Place = () => {
    const { id } = useParams();
    const location = useLocation();
    const place = location.state?.place;

    return (
        <div className="place-container">
            <h1>{place.place}</h1> {/* Access the place name here */}
            <p>{place.description}</p>
            <p>Location: {place.location}</p>
            <p>Rating: {place.rating}</p>
            <h2>Hotels:</h2>
            {<ul>
                {place.hotels.map((hotel, index) => (
                    <li key={index}>{hotel}</li>
                ))}
            </ul> }
            <Link to="/" className="back-link">Go Back</Link>
        </div>
    );
}

export default Place;