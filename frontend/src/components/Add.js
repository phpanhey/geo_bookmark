import LoadingScreen from './LoadingScreen';

const Add = () => {
    return (
        <div class="flex h-screen justify-center items-center">
            <LoadingScreen/>
            <div class="text-center">
                <h1 class="text-3xl">add house</h1>
                <button onClick={handleAddClick} class="mt-3 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded text-4xl">+</button>
            </div>
        </div>
    )
}

const handleAddClick = () => {
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
                alert("done");
            });
        });
    }
}

export default Add
