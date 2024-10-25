
import React, { useEffect, useState } from 'react';
import axios from '../api/api';

const OwnerDashboard = () => {
    const [pgs, setPgs] = useState([]);
    const [newPG, setNewPG] = useState({ title: '', location: '', price: '', amenities: '', description: '' });

    // Fetch owner's PG listings
    const fetchOwnerPGs = async () => {
        try {
            const response = await axios.get('/owner/mypgs');
            setPgs(response.data.data);
        } catch (error) {
            console.error("Error fetching PGs: ", error);
        }
    };

    // Create a new PG listing
    const createPG = async () => {
        try {
            await axios.post('/owner/create', newPG);
            fetchOwnerPGs();  // Refresh the list
            setNewPG({ title: '', location: '', price: '', amenities: '', description: '' });
        } catch (error) {
            console.error("Error creating PG: ", error);
        }
    };

    // Delete a PG listing
    const deletePG = async (id) => {
        try {
            await axios.delete(`/owner/delete/${id}`);
            fetchOwnerPGs(); // Refresh the list after delete
        } catch (error) {
            console.error("Error deleting PG: ", error);
        }
    };

    // Update PG form inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPG({ ...newPG, [name]: value });
    };

    useEffect(() => {
        fetchOwnerPGs(); // Load owner's PG listings on component mount
    }, []);

    return (
        <div>
            <h1>Owner Dashboard</h1>
            <h2>Your PG Listings</h2>
            <ul>
                {pgs.map(pg => (
                    <li key={pg._id}>
                        {pg.title} - {pg.location} - {pg.price}
                        <button onClick={() => deletePG(pg._id)}>Delete</button>
                    </li>
                ))}
            </ul>

            <h2>Create New PG Listing</h2>
            <form onSubmit={(e) => { e.preventDefault(); createPG(); }}>
                <input type="text" name="title" value={newPG.title} onChange={handleChange} placeholder="Title" required />
                <input type="text" name="location" value={newPG.location} onChange={handleChange} placeholder="Location" required />
                <input type="text" name="price" value={newPG.price} onChange={handleChange} placeholder="Price" required />
                <input type="text" name="amenities" value={newPG.amenities} onChange={handleChange} placeholder="Amenities" />
                <textarea name="description" value={newPG.description} onChange={handleChange} placeholder="Description"></textarea>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default OwnerDashboard;
