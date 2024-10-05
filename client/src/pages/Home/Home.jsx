import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [placeInfo, setPlaceInfo] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSearch = async () => {
        if (!inputValue.trim()){
            alert("Please Enter a Place Name");
            return;
        }
        try {
            const response = await axios.get(`http://localhost:3001/search?place=${inputValue}`);
            //console.log(response);
            const pl = response.data;
            //console.log(pl);
            navigate(`/places/${pl._id}`, { state: { place: pl } });
        }
        catch (error) {
            if (error.response && error.response.status === 404) {
                setError("Place Not Found");
            }
            else {
                console.log(error);
                setError("An error occured");
            }
        }
    };

    return (
        <div>
            <div className='welcome'>
                <h1>Welcome</h1>
                <h3>Let's Explore The World</h3>
                <p>Best Thing In The World Is To Travel And Explore Things</p>
            </div>
            <div className='container'>
                <h1>Search for a Place</h1>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter place name"
                    required
                />
                <button onClick={handleSearch}>Search</button>

                {error && <p>{error}</p>}
            </div>
        </div>
    );
};

export default Home;
