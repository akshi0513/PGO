import React from 'react';
import { Link } from 'react-router-dom';

const PGCard = ({ pg }) => {
    return (
        <div className="pg-card">
            <img src={pg.photos[0]} alt={pg.title} />
            <h2>{pg.title}</h2>
            <p>{pg.location}</p>
            <p>Price: ${pg.price}/month</p>
            <Link to={`/pglocations/${pg._id}`}>View Details</Link>
        </div>
    );
};

export default PGCard;
