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
    const geo_tag = { category: "Stinker from react", coordinates: [53.079296, 8.801694], created_at: "2021-11-12 12:57:28.185236" };

    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(geo_tag)
    };
    fetch('http://api.philipp-panhey.de/', requestOptions).then(response => response.json())
}


export default Add
