import React, { useEffect, useState } from 'react';
import PGCard from '../components/PGCard';
import api from '../api/api';

const HomePage = () => {
    const [pgs, setPGs] = useState([]);

    useEffect(() => {
        const fetchPGs = async () => {
            const response = await api.get('/pglocations');
            setPGs(response.data.data);
        };
        fetchPGs();
    }, []);

    return (
        <div>
            <h1>Available PG Listings</h1>
            <div className="pg-list">
                {pgs.map(pg => (
                    <PGCard key={pg._id} pg={pg} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
