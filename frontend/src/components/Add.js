const Add = () => {
    return (
        <div className="flex flex-wrap container m-4">
            <button onClick={clickedAdd} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-3xl">
                +
            </button>
        </div>
    )
}

const clickedAdd = () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const coordinates = [position.coords.latitude, position.coords.longitude];
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ description: "haus", coordinates: coordinates })
            };
            fetch('http://api.philipp-panhey.de/', requestOptions).then(response => response.json());
        });

    }



}

export default Add
