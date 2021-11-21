import LoadingScreen from './LoadingScreen';
import React, { useState } from 'react';

const Add = () => {
    const [loading, setLoading] = useState(false);

    const handleAddClick = () => {
        setLoading(true);
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const coordinates = [position.coords.latitude, position.coords.longitude];
                const requestOptions = {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ description: "haus", coordinates: coordinates })
                };
                fetch('http://api.philipp-panhey.de/', requestOptions).then((response) => {
                    response.json();
                    setLoading(false);
                    alert("done");
                });
            });
        }
    }

    return (
        <div className="flex h-screen justify-center items-center">
            <LoadingScreen loading={loading}/>
            <div className="text-center">
                <h1 className="text-3xl">add house</h1>
                <button onClick={handleAddClick} className="mt-3 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded text-4xl">+</button>
            </div>
        </div>
    )
}

export default Add
