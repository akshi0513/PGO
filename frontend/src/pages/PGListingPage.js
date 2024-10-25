import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/api';

const PGListingPage = () => {
    const { id } = useParams();
    const [pg, setPG] = useState(null);

    useEffect(() => {
        const fetchPG = async () => {
            const response = await api.get(`/pglocations/${id}`);
            setPG(response.data.data);
        };
        fetchPG();
    }, [id]);

    if (!pg) return <div>Loading...</div>;

    return (
        <div>
            <h1>{pg.title}</h1>
            <img src={pg.photos[0]} alt={pg.title} />
            <p>Location: {pg.location}</p>
            <p>Price: ${pg.price}/month</p>
            <p>Description: {pg.description}</p>
            <p>Amenities: {pg.amenities.join(', ')}</p>
        </div>
    );
};

export default PGListingPage;
