import LoadingScreen from './LoadingScreen';
import Header from './Header';
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
                fetch('https://api.philipp-panhey.de/', requestOptions).then((response) => {
                    response.json();
                    setLoading(false);
                    alert("✓");
                });
            });
        }
    }

    return (
        <div>
            <Header />
            <div className="flex h-screen justify-center items-center dark:bg-black dark:text-white">
                <LoadingScreen loading={loading} />
                <div className={`text-center ${loading ? "hidden" : ""}`}>
                    <h1 className="text-3xl">add house</h1>
                    <button onClick={handleAddClick} className="mt-3 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded text-4xl">+</button>
                </div>
            </div>
        </div>
    )
}

export default Add
