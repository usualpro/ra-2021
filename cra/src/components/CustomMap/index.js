import { Map, TileLayer } from 'react-leaflet';

export const CustomMap = () => <div className="w-100 mb-3">
    <Map
        center={[0, 0]}
        zoom={3}
        maxZoom={5}
        minZoom={1}>
        <TileLayer
            attribution={'&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}
            url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
        />
    </Map>
</div>;