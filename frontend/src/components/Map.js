import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Header from './Header';
import React, { useState, useEffect } from 'react';

const Map = () => {

    const [map_entries, setMapEntries] = useState([]);

    useEffect(() => {
        fetch('https://api.philipp-panhey.de/')
            .then(response => response.json())
            .then(data => setMapEntries(data));
    },[]);

    const icon = new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })

    return (
        <div>
            <Header />
            <MapContainer center={[53.095158, 8.806068]} zoom={15} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
                />
                {map_entries.map((entry) =>
                    <Marker key={entry.id} position={entry.coordinates} icon={icon} >
                        <Popup> {entry.description} </Popup>
                    </Marker>)}
            </MapContainer>
        </div >
    )
}

export default Map
